const Playground = () => {
  console.clear()

  const supportFirefox = true

  // Get our SVG values
  const svg = document.querySelector('svg')!
  const viewboxValues = svg.getAttribute('viewBox').split(' ')
  const width = svg.getAttribute('width') || viewboxValues[2]
  const height = svg.getAttribute('height') || viewboxValues[3]

  // Encode function from Yoksel: https://codepen.io/yoksel/pen/MWKeKK?editors=0010
  const encodedSvg = encodeSVG(svg.outerHTML)

  // Create the template
  let infoTemplate = `padding-left:${width}px;background-repeat:no-repeat;background-image:url("data:image/svg+xml,${encodedSvg}")`
  if (supportFirefox) {
    infoTemplate = `line-height:${height}px;padding-block:${height / 2}px;` + infoTemplate
  } else {
    infoTemplate = `padding-top:${height}px;` + infoTemplate
  }

  // For easy copy-paste into your site:
  console.info(`
console.info(
  "%c ",
  \`${infoTemplate}\`
);
`)

  // For the preview:
  console.info(
    '%c ',
    infoTemplate
  )

  return (
    <>
      {/* NOTE: xmlns="http://www.w3.org/2000/svg" is necessary  */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 200">

        <defs>
          <linearGradient id="grad">
            <stop id="stop1" offset="0%" stop-color="#388bee" />
            <stop id="stop2" offset="100%" stop-color="#514a9d" />
          </linearGradient>
        </defs>
        <rect width="750" height="500" fill="url(#grad)" />
        <text text-anchor="end" font-size="50" x="725" y="125">
          welcome to
        </text>
        <text text-anchor="end" font-size="50" x="725" y="175">
         console playground
        </text>
      </svg>
    </>
  )
}

// <style>
//     text {
//       font-family: sans-serif;
//       font-weight: 100;
//       fill: #d8eaff;
//     }
//     #stop1 {
//       animation: recolor 40s linear infinite alternate
//     }
//     #stop2 {
//       animation: recolor 40s -32s linear infinite alternate
//     }
//     @keyframes recolor {
//       0% {
//         stop-color: #388bee;
//       }

//       20% {
//         stop-color: #24c6dc;
//       }

//       40% {
//         stop-color: #af74fd;
//       }

//       60% {
//         stop-color: #c020d9;
//       }

//       80% {
//         stop-color: #514a9d;
//       }

//       100% {
//         stop-color: #053ece;
//       }
//     }
//   </style>