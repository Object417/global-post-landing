import "./styles/main.css"
import "bootstrap/dist/js/bootstrap.min.js"

// Replace bootstrap icons with svg

/*
const $bootstrapIcons = document.querySelectorAll(".bi")

$bootstrapIcons.forEach(($icon) => {
  const iconClassName = Array.from($icon.classList).find((className) =>
    /^bi-.+$/.test(className)
  )
  const iconName = iconClassName.slice(3)

  import(`../node_modules/bootstrap-icons/icons/${iconName}.svg?raw`).then(
    (res) => ($icon.outerHTML = res.default)
  )
})
*/
