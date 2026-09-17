import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => ({
  theme: 'dark',
  themeVariables: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: '13px',
    primaryColor: '#f5b53f',
    primaryTextColor: '#0b1220',
    primaryBorderColor: '#f5b53f',
    lineColor: '#98a3b8',
    sectionBkgColor: 'rgba(255,255,255,0.04)',
    altSectionBkgColor: 'rgba(255,255,255,0.02)',
    gridColor: 'rgba(255,255,255,0.12)',
    taskBkgColor: '#3fd0c9',
    taskBorderColor: '#3fd0c9',
    taskTextColor: '#0b1220',
    taskTextDarkColor: '#0b1220',
    taskTextOutsideColor: '#f6f4ee',
    taskTextLightColor: '#0b1220',
    todayLineColor: '#ff6b6b',
    titleColor: '#f6f4ee',
    textColor: '#f6f4ee',
  },
}))
