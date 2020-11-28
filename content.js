const sbStrs = ["如何看待", "如何评价"]
const indexSectionSelector =
  "#TopstoryContent > div > div > div > .Card.TopstoryItem"
const indexSectionTitleSelector = ".ContentItem-title  a"
const hotSectionSelector = ".HotList-list > section"
const hotSectionTitleSelector = "h2.HotItem-title"

function fkGeneral(sectionSelector, titleSelector) {
  document.querySelectorAll(sectionSelector).forEach((node) => {
    let titleNode = node.querySelector(titleSelector)
    if (titleNode == null) {
      return
    }
    for (const str of sbStrs) {
      if (titleNode.innerHTML.includes(str)) {
        node.parentNode.removeChild(node)
        return
      }
    }
  })
}
function fkHome() {
  fkGeneral(indexSectionSelector, indexSectionTitleSelector)
}

function fkHot() {
  fkGeneral(hotSectionSelector, hotSectionTitleSelector)
}

function fk() {
  switch (location.pathname) {
    case "/":
      fkHome()
      break
    case "/hot":
      fkHot()
      break
    default:
      break
  }
}
setInterval(fk, 1000)
