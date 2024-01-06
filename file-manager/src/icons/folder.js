import React from 'react'

const Folder = (props) => {
  return (
    <div className={`m-5 float-left w-[7vh] h-[10vh] overflow-hidden ${props.selected?"border-1 border-red-700":""}`}>
        <div className='flex flex-col items-center'>
            <img alt="svgImg" className='w-[70%] h-[70%] block' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNzU0NTMsLTAuMzY5OSkgc2NhbGUoNS4zMzMzMyw1LjMzMzMzKSI+PHBhdGggZD0iTTQ0LjE1MiwyMS4yOGMtMC4wMSwtMC43MjUgLTAuMDQ4LC0xLjQ3OSAtMC4yNTcsLTIuMTYzYy0wLjEyMSwtMS45OTIgLTAuMjQxLC01LjYwOSAtMC4zNjIsLTYuNjAzYy0wLjA3MSwtMC41ODUgLTAuMTU3LC0xLjIwNiAtMC41MzMsLTEuNjU5Yy0wLjYxMSwtMC43MzYgLTEuNzE1LC0wLjc0OSAtMi42NzEsLTAuN2MtNS4wOTgsMC4yNiAtMTAuNjksMC4xMzcgLTE1Ljc4OSwwLjM5NmMtMS4wMzMsMC4wNTMgLTIuMDg3LDAuMTAzIC0zLjA4NSwtMC4xNzJjLTAuOTk3LC0wLjI3NSAtMS45MDcsLTEuMjg0IC0yLjI1MywtMi4yNTljLTAuMDkyLC0wLjI1OSAtMC4xNDEsLTAuNTM4IC0wLjI4NywtMC43NzJjLTAuMzMyLC0wLjUzMSAtMS4wNCwtMC42NjIgLTEuNjY1LC0wLjY5Yy0yLjA0LC0wLjA5MSAtNC4wNzMsMC4zNzMgLTYuMTE0LDAuMzEyYy0xLjIwNywtMC4wMzcgLTIuNDE4LC0wLjI1NyAtMy42MTcsLTAuMTAzYy0xLjE5OCwwLjE1NSAtMi40MzgsMC43OTIgLTIuODYyLDEuOTI0Yy0wLjIwNSwwLjU0NyAtMC4yMzcsMS40OTMgLTAuMjI4LDIuMDc2YzAuMDM2LDIuMzggMC4xNzgsOC44MzEgMC4yMjMsMTEuMjE3YzAsMC4wMSAwLjAxLDAuMDE1IDAuMDExLDAuMDI0YzAuMDA4LDQuODU0IDAuMTA4LDkuMzU1IDAuMDI4LDE0LjEzMmMtMC4wMjEsMS4yODkgMC4wMDIsMi43MDggMC44NSwzLjY3OWMwLjU5MiwwLjY3OCAxLjQ4MSwxLjAwNSAyLjM0MiwxLjI2NmMyLjcyNCwwLjgyNSA1LjU3LDEuMjQ2IDguNDE2LDEuMjQ0YzIuNDM4LC0wLjAwMiA0Ljc2OCwtMC42MTkgNy4yMDYsLTAuNTQ0YzIuNDY0LDAuMDc2IDQuOTAyLDAuNTQzIDcuMzY1LDAuNjQxYzMuNTU2LDAuMTQxIDcuMDkyLC0wLjQ5MiAxMC41OTQsLTEuMTIxYzAuNDksLTAuMDg4IDEsLTAuMTg0IDEuNCwtMC40ODJjMC43NjcsLTAuNTcgMC44NzgsLTEuNjU2IDAuOTE5LC0yLjYxMWMwLjI1OCwtNi4xMDkgMC40NTEsLTEwLjkxOCAwLjM2OSwtMTcuMDMyeiIgZmlsbD0iI2I1OTVmYyI+PC9wYXRoPjxwYXRoIGQ9Ik00NC42NTIsMjEuMjczYy0wLjAxMSwtMC44MDggLTAuMDQ5LC0xLjU5NSAtMC4yNjcsLTIuMzExYy0wLjA0NSwtMC43NDQgLTAuMDg1LC0xLjY4OSAtMC4xMjUsLTIuNjMyYy0wLjA0LC0wLjgzIC0wLjA4LC0xLjY1IC0wLjEyLC0yLjMzYy0wLjAzLC0wLjY4IC0wLjA3LC0xLjI0IC0wLjExLC0xLjU1Yy0wLjA3LC0wLjU5IC0wLjE2LC0xLjM0IC0wLjY1LC0xLjkxYy0wLjcyLC0wLjg4IC0xLjksLTAuOTUgLTMuMDgsLTAuODhjLTIuNTQsMC4xMiAtNS4yNSwwLjE2IC03Ljg3LDAuMTljLTIuNjMsMC4wNCAtNS4zNiwwLjA3IC03LjkxLDAuMmMtMC45OSwwLjA1IC0yLDAuMSAtMi45MywtMC4xNWMtMC43OCwtMC4yMiAtMS42LC0xLjA1IC0xLjkyLC0xLjk1Yy0wLjAyLC0wLjA3IC0wLjA0LC0wLjE1IC0wLjA2LC0wLjIyYy0wLjA3LC0wLjIgLTAuMTMsLTAuNDMgLTAuMjcsLTAuNjVjLTAuNTMsLTAuODUgLTEuNjksLTAuOTEgLTIuMDcsLTAuOTJjLTEuMDgsLTAuMDUgLTIuMTYsMC4wNSAtMy4yMSwwLjE1Yy0wLjk1LDAuMDkgLTEuOTQsMC4xOSAtMi45MSwwLjE2Yy0wLjM5LC0wLjAxIC0wLjc4LC0wLjA0IC0xLjE3LC0wLjA4Yy0wLjgyLC0wLjA2IC0xLjY3LC0wLjEzIC0yLjUyLC0wLjAyYy0xLjI0LDAuMTYgLTIuNzQsMC44MyAtMy4yNywyLjI1Yy0wLjI1LDAuNjUgLTAuMjcsMS42OSAtMC4yNiwyLjI2YzAuMDIsMS41MSAwLjA5LDQuNjYgMC4xNCw3LjM3bDAuMDYsMi43MmwwLjAzLC0wLjA0OGMtMC4wMDUsMi4xMzUgMC4wMTEsNC4xOTggMC4wMyw2LjIyN2MwLjAyNywzLjA4MyAwLjA1Myw1Ljk5NCAwLjAwMiw5LjA4M2MtMC4wMjQsMS40NDEgMC4wMzEsMi45MzggMC45NzMsNC4wMTdjMC42NjUsMC43NjEgMS42MywxLjEzIDIuNTc0LDEuNDE2YzIuNzcxLDAuODQgNS42NDUsMS4yNjYgOC41NCwxLjI2NmMxLjE1OCwtMC4wMiAyLjM1NCwtMC4xNDIgMy40OCwtMC4yNzljMS4yNzUsLTAuMTU1IDIuNDc5LC0wLjMwNiAzLjcyOSwtMC4yNjVjMS4yNDgsMC4wMzggMi41MjEsMC4xODIgMy43NSwwLjMyMWMxLjE3OSwwLjEzMyAyLjM5NywwLjI3MSAzLjYxMSwwLjMxOWMwLjM0NywwLjAxNCAwLjY5MiwwLjAyIDEuMDM5LDAuMDJjMy4yNzUsMCA2LjUxOCwtMC41ODMgOS42NjMsLTEuMTQ4YzAuNDk0LC0wLjA5IDEuMTA5LC0wLjIwMSAxLjYwOCwtMC41NzJjMS4wMjQsLTAuNzYyIDEuMDg3LC0yLjIxMiAxLjEyMSwtMi45OTFjMC4yODQsLTYuNjY5IDAuNDUsLTExLjE0NSAwLjM3MiwtMTcuMDYzek01LjA2OCwxOC4xM2MtMC4wNSwtMi42ODcgLTAuMTE4LC01Ljc3OCAtMC4xMzgsLTcuMjdjLTAuMDEsLTAuNjQgMC4wMywtMS40NyAwLjE5LC0xLjg5YzAuMzgsLTEgMS41MiwtMS40OCAyLjQ2LC0xLjYxYzAuMjksLTAuMDMgMC41NywtMC4wNSAwLjg2LC0wLjA1YzAuNDcsMCAwLjk2LDAuMDQgMS40NiwwLjA4YzAuNDEsMC4wMyAwLjgyLDAuMDcgMS4yMiwwLjA4YzEuMDMsMC4wMyAyLjA1LC0wLjA3IDMuMDQsLTAuMTZjMS4wMSwtMC4xIDIuMDYsLTAuMTkgMy4wNywtMC4xNWMwLjY4LDAuMDMgMS4wOSwwLjE4IDEuMjYsMC40NWMwLjA3LDAuMSAwLjExLDAuMjUgMC4xNiwwLjQxYzAuMDIsMC4wOSAwLjA1LDAuMTggMC4wOCwwLjI3YzAuNDMsMS4yMSAxLjUsMi4yNyAyLjU5LDIuNTdjMS4wOSwwLjMgMi4yMywwLjI0IDMuMjUsMC4xOWMyLjU0LC0wLjEzIDUuMjUsLTAuMTYgNy44NywtMC4yYzIuNjMsLTAuMDMgNS4zNiwtMC4wNyA3LjkxLC0wLjJjMC45MSwtMC4wNCAxLjgyLC0wLjAxIDIuMjcsMC41MmMwLjI3LDAuMzMgMC4zNCwwLjgxIDAuNDIsMS40YzAuMDcsMC42IDAuMTQsMi4yMyAwLjIyLDMuODFjMC4wMTMsMC4zMTUgMC4wMjYsMC42MjMgMC4wNCwwLjkyNmMtMS4wNDQsLTAuODY4IC0yLjUxLC0xLjA2MiAtMy42MDEsLTEuMTE3Yy0xLjQwOCwtMC4wNzEgLTIuODI5LC0wLjAxNyAtNC4yMDUsMC4wMzZjLTEuMjU5LDAuMDUgLTIuNTYzLDAuMTAxIC0zLjgzMiwwLjA1Yy0xLjEwNSwtMC4wNDIgLTIuMjMzLC0wLjE2MSAtMy4zMjMsLTAuMjc3Yy0wLjc0OCwtMC4wNzkgLTEuNDk3LC0wLjE1OCAtMi4yNDcsLTAuMjE2Yy01LjI4OCwtMC4zOTcgLTEwLjU4NywwLjMxMyAtMTUuNzE1LDEuMDA1Yy0wLjY4NSwwLjA5MSAtMS43NjIsMC4xMjkgLTIuODAzLDAuMTY2Yy0xLjAwMywwLjAzNSAtMS44ODYsMC40ODYgLTIuNTA2LDEuMTc3ek00My4yODEsMzguMjkxYy0wLjAzNiwwLjg0OSAtMC4xMjQsMS43OTEgLTAuNzE3LDIuMjMxYy0wLjMxMiwwLjIzMSAtMC43NTksMC4zMTMgLTEuMTksMC4zOTFjLTMuNDI0LDAuNjE2IC02Ljk2MiwxLjI1NyAtMTAuNDg1LDEuMTEzYy0xLjE3NywtMC4wNDYgLTIuMzc3LC0wLjE4MiAtMy41MzcsLTAuMzEzYy0xLjI1MSwtMC4xNDIgLTIuNTQ0LC0wLjI4NyAtMy44MzIsLTAuMzI3Yy0wLjE0NSwtMC4wMDQgLTAuMjg3LC0wLjAwNiAtMC40MzEsLTAuMDA2Yy0xLjE3NywwIC0yLjMzMSwwLjE0MSAtMy40NTEsMC4yNzdjLTEuMDkxLDAuMTM0IC0yLjIyLDAuMjcyIC0zLjMzOSwwLjI3MmMtMC4wMDcsMCAtMC4wMTQsMCAtMC4wMiwwYy0yLjc5OCwwIC01LjU3NCwtMC40MTEgLTguMjUyLC0xLjIyM2MtMC43NDYsLTAuMjI2IC0xLjU4NiwtMC41MTggLTIuMTA5LC0xLjExN2MtMC43MDksLTAuODEyIC0wLjc0OCwtMi4wNDMgLTAuNzI3LC0zLjM0MmMwLjA1MSwtMy4xMDIgMC4wMjUsLTYuMDIgLTAuMDAyLC05LjEwOGMtMC4wMiwtMi4xNjggLTAuMDM5LC00LjM2NiAtMC4wMywtNi42NjFjMC4wMDUsLTEuMzY4IDEuMDgxLC0yLjQ3OCAyLjQ1LC0yLjUyNmMxLjA2NSwtMC4wMzggMi4xNjcsLTAuMDc3IDIuOSwtMC4xNzZjNS4wNzgsLTAuNjgzIDEwLjMyNywtMS4zOTIgMTUuNTA2LC0wLjk5N2MwLjc0LDAuMDU2IDEuNDc5LDAuMTM0IDIuMjE4LDAuMjEzYzEuMTA2LDAuMTE3IDIuMjUxLDAuMjM4IDMuMzksMC4yODJjMS4zMTEsMC4wNDkgMi42MzIsLTAuMDAxIDMuOTEsLTAuMDUxYzEuMzUyLC0wLjA1MiAyLjc1MSwtMC4xMDYgNC4xMTUsLTAuMDM3YzEuNzQ3LDAuMDkxIDIuODMsMC41MDEgMy40MDcsMS4yOTJjMC41MjYsMC43MjEgMC41ODIsMS42OTggMC41OTcsMi44MDljMC4wNzgsNS44OTIgLTAuMDg4LDEwLjM1NSAtMC4zNzEsMTcuMDA0eiIgZmlsbD0iIzAxMDEwMSI+PC9wYXRoPjwvZz48L2c+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA4Ljg5MDM4LDEwMS45ODkwMSkgc2NhbGUoMC40Mzk3MSwwLjQzOTcxKSIgaWQ9Im92ZXJsYXkiPjxwYXRoIGQ9Ik01MCw0M2MwLjE5MSwtOC4zODMgLTAuMDI2LC0xNi4xMjQgMCwtMjZjLTAuMDI2LC01LjEyNCAtMSwtMTEgLTEsLTExYzAsMCAtMTUuMzg2LC0wLjk3NCAtMjIuODM5LC0wLjk3NGMtNi43ODUsMCAtMTUuNDI4LC0wLjMxMyAtMjEuMTYxLDMuOTc0YzAuMTkxLDAuMzgxIDEzLjA4OSw3Ni42MTEgMTUsMTE3LjAwMWM3LjE2NywwLjY2NyAxNywwLjk5OSAyMywwLjk5OWMzLC02IDQuNzgzLC0xOS4xNDEgNC45NzQsLTI3LjkwNWMwLjA5NiwtOC44NTkgMC41MjIsLTE3LjcxOCAwLjcxMywtMjYuNjczYzAuMzgzLC0xMC45NTQgMS4wMjYsLTE4LjQ2NyAxLjMxMywtMjkuNDIyeiIgZmlsbD0iI2ZlYmYxMCI+PC9wYXRoPjxwYXRoIGQ9Ik00MywxMzJjLTYuMjExLDAgLTE2LjI2NSwtMC4zNTEgLTIzLjQ2MywtMS4wMjFjLTIuNDgxLC0wLjIzIC00LjQxMywtMi4yNTMgLTQuNTMxLC00Ljc0MmMtMS44NDMsLTM4Ljk0NyAtMTQuMDA5LC0xMTEuNzgxIC0xNC44NjUsLTExNi4wNTdjLTAuMjMxLC0wLjk1MyAtMC4xNzksLTEuOTYxIDAuMTYzLC0yLjg5OGMwLjQ3MywtMS4yOTQgMS40NiwtMi4zMzUgMi43MjYsLTIuODc4YzYuNzgsLTIuOTA1IDE0LjU2MiwtNC4zNzkgMjMuMTMxLC00LjM3OWM3LjUyNSwwIDIyLjUyMSwwLjk0NCAyMy4xNTUsMC45ODRjMi4wMzIsMC4xMjkgMy43ODQsMS40NzggNC40MjgsMy40MDljMC4yMDksMC42MzEgMS4yNTYsNC4xOTUgMS4yNTYsMTIuNTgyYy0wLjAxLDMuNzk1IDAuMDE2LDcuMjYyIDAuMDQxLDEwLjU3MWMwLjA0LDUuMzAyIDAuMDc3LDEwLjMxIC0wLjA0MiwxNS41NDNjMCwwLjAwNSAwLDAuMDExIDAsMC4wMTdjLTAuMTU5LDYuMDc0IC0wLjQyLDEwLjk4NiAtMC42OTcsMTYuMTg2Yy0wLjIxOSw0LjExOSAtMC40NDUsOC4zNzggLTAuNjE2LDEzLjI4Yy0wLjA3OSwzLjY5NyAtMC4yLDcuNDQ1IC0wLjMyMiwxMS4xODRjLTAuMTY1LDUuMDQ5IC0wLjMzNCwxMC4yNzEgLTAuMzg5LDE1LjM2OGMtMC4xNzUsOC4wNTQgLTEuNzg1LDIyLjY1MyAtNS41MDIsMzAuMDg4Yy0wLjg0OCwxLjY5MyAtMi41NzksMi43NjMgLTQuNDczLDIuNzYzek0yNC43NSwxMjEuMzYxYzQuODk5LDAuMzMxIDEwLjQwNywwLjUzNyAxNC44OCwwLjYwOWMxLjkwOSwtNS45MTQgMy4xODgsLTE1LjgwMyAzLjM0NSwtMjIuOTg1YzAuMDU1LC01LjE1MSAwLjIyNywtMTAuNDI4IDAuMzkzLC0xNS41M2MwLjEyMSwtMy43MDEgMC4yNDEsLTcuNDEyIDAuMzIxLC0xMS4xMzljMC4xNzYsLTUuMDYyIDAuNDA1LC05LjM2NyAwLjYyNiwtMTMuNTMxYzAuMjczLC01LjEyOCAwLjUzMSwtOS45NzEgMC42ODYsLTE1LjkwNmMwLjExNiwtNS4wOCAwLjA3OSwtMTAuMDEyIDAuMDQsLTE1LjIzMmMtMC4wMjUsLTMuMzQyIC0wLjA1MSwtNi44NDIgLTAuMDQxLC0xMC42NmMwLC0yLjY4OSAtMC4xMjEsLTQuNzM3IC0wLjI2OCwtNi4yMzFjLTUuMDI5LC0wLjI4NiAtMTMuNjUyLC0wLjczIC0xOC41NzEsLTAuNzNjLTUuNjU2LDAgLTEwLjg1LDAuNzQgLTE1LjQ5NiwyLjIwM2MzLjMzNywxOC4wNTQgMTEuOTk5LDc1LjkxIDE0LjA4NSwxMDkuMTMyeiIgZmlsbD0iIzAwMDAwMCI+PC9wYXRoPjxwYXRoIGQ9Ik00NS4zOTIsMTU1LjE3MmMtNC4xMDUsLTEzLjMyNCAtMjIuNDk3LC01LjUwMSAtMjcuNDIsMi42ODdjLTQuOTAxLDguMTUxIC0wLjI0MiwxNy41OTYgOS4yNywxOC45OTZjMTEuMjM1LDEuNjU0IDIxLjM3OCwtMTEuMiAxOC4xNSwtMjEuNjgzeiIgZmlsbD0iI2ZlYmYxMCI+PC9wYXRoPjxwYXRoIGQ9Ik0yOS4xOTMsMTgxLjk2MmMtMC44OTQsMCAtMS43ODcsLTAuMDYzIC0yLjY3NywtMC4xOTRjLTYuMjA4LC0wLjkxMiAtMTEuNDA4LC00LjYyMSAtMTMuOTEyLC05LjkyMmMtMi40ODMsLTUuMjU3IC0yLjA4NywtMTEuMjkxIDEuMDg2LC0xNi41NTZjNC4wMDMsLTYuNjQzIDE0LjkzNywtMTMuMjUzIDI0LjIwNCwtMTIuMTI1YzYuMDQyLDAuNzM3IDEwLjQwMiw0LjQ4MyAxMi4yNzYsMTAuNTV2MC4wMDFjMi4wNTYsNi42NTkgMC4xNzksMTQuNDc3IC00Ljg5OSwyMC40MDFjLTQuMzA5LDUuMDI3IC0xMC4xNjcsNy44NDUgLTE2LjA3OCw3Ljg0NXpNMzUuNywxNTMuMDMzYy00Ljg1OSwwIC0xMS4zMzQsMy45MTYgLTEzLjQ0Niw3LjQxOWMtMS40MzYsMi4zODMgLTEuNjUyLDQuOTEyIC0wLjYwOCw3LjEyM2MxLjA4NywyLjMwMSAzLjM5MSwzLjg2NyA2LjMyMiw0LjI5OGMzLjM2OCwwLjQ5NiA2Ljk5NywtMS4xIDkuNzA5LC00LjI2NGMyLjg2NCwtMy4zNDIgMy45ODksLTcuNTM1IDIuOTM3LC0xMC45NDRjLTAuNjk3LC0yLjI1NCAtMS44NzMsLTMuMzIyIC0zLjkzMiwtMy41NzRjLTAuMzE4LC0wLjAzOCAtMC42NDYsLTAuMDU4IC0wLjk4MiwtMC4wNTh6IiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"/>        
        </div>
        <p className='text-center block text-sm font-semibold mt-0 leading-tight'>{props.folder_name ||"Folder Name"}</p>
    </div>
  )
}

export default Folder