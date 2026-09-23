import { chromium } from 'playwright-chromium'
const [path, total] = [process.argv[2], Number(process.argv[3])]
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
const p = await (await b.newContext({ viewport:{width:1280,height:720} })).newPage()
const errs=[]; p.on('pageerror',e=>errs.push(e.message))
let bad=0
for (let n=1;n<=total;n++){
  await p.goto(`${process.env.DECK_ORIGIN ?? 'http://localhost:4173'}${path}#/${n}`,{waitUntil:'networkidle'}); await p.waitForTimeout(400)
  for(let i=0;i<24;i++){ await p.keyboard.press('ArrowRight'); await p.waitForTimeout(70)
    if(!(await p.evaluate(()=>location.hash)).startsWith(`#/${n}`)){ await p.keyboard.press('ArrowLeft'); await p.waitForTimeout(250); break } }
  await p.waitForTimeout(300)
  const r = await p.evaluate(() => {
    const slide=[...document.querySelectorAll('.slidev-layout')].find(e=>e.getBoundingClientRect().height>10)
    if(!slide) return null
    const sb=slide.getBoundingClientRect()
    const rb=[...document.querySelectorAll('footer.ribbon')].find(e=>e.getBoundingClientRect().height>4)
    const floor = rb ? rb.getBoundingClientRect().top : sb.bottom
    let worst=0, who=''
    for(const el of slide.querySelectorAll('*')){
      const st=getComputedStyle(el)
      if(st.display==='none'||st.visibility==='hidden'||st.opacity==='0') continue
      const q=el.getBoundingClientRect(); if(q.height===0) continue
      const over=q.bottom-floor
      if(over>worst && !el.closest('footer.ribbon')){ worst=over; who=(el.className?.toString().slice(0,30)||el.tagName)+' «'+(el.textContent||'').trim().slice(0,20)+'»' }
    }
    const h1=slide.querySelector('h1')
    return {over:Math.round(worst), who, title:h1?h1.textContent.slice(0,40):''}
  })
  if(r&&r.over>4){bad++; console.log(`  ${String(n).padStart(2)} ${String(r.over).padStart(4)}px  ${r.title.padEnd(42)} ${r.who}`)}
}
console.log(`${path}  ${bad?bad+' OVERFLOWING':'all '+total+' slides clear the ribbon'}`)
if(errs.length) console.log('  page errors:', [...new Set(errs)].slice(0,4))
await b.close()
