import generateIcon from "./generate";

// Icons to import
const alarmFill = require("bootstrap-icons/icons/alarm-fill.svg");
const alarm = require("bootstrap-icons/icons/alarm.svg");
const alt = require("bootstrap-icons/icons/alt.svg");
const appIndicator = require("bootstrap-icons/icons/app-indicator.svg");
const app = require("bootstrap-icons/icons/app.svg");
const archiveFill = require("bootstrap-icons/icons/archive-fill.svg");
const archive = require("bootstrap-icons/icons/archive.svg");
const arrow90degDown = require("bootstrap-icons/icons/arrow-90deg-down.svg");
const arrow90degLeft = require("bootstrap-icons/icons/arrow-90deg-left.svg");
const arrow90degRight = require("bootstrap-icons/icons/arrow-90deg-right.svg");
const arrow90degUp = require("bootstrap-icons/icons/arrow-90deg-up.svg");
const arrowBarDown = require("bootstrap-icons/icons/arrow-bar-down.svg");
const arrowBarLeft = require("bootstrap-icons/icons/arrow-bar-left.svg");
const arrowBarRight = require("bootstrap-icons/icons/arrow-bar-right.svg");
const arrowBarUp = require("bootstrap-icons/icons/arrow-bar-up.svg");
const arrowClockwise = require("bootstrap-icons/icons/arrow-clockwise.svg");
const arrowCounterclockwise = require("bootstrap-icons/icons/arrow-counterclockwise.svg");
const arrowDownLeft = require("bootstrap-icons/icons/arrow-down-left.svg");
const arrowDownRight = require("bootstrap-icons/icons/arrow-down-right.svg");
const arrowDownShort = require("bootstrap-icons/icons/arrow-down-short.svg");
const arrowDown = require("bootstrap-icons/icons/arrow-down.svg");
const arrowLeftRight = require("bootstrap-icons/icons/arrow-left-right.svg");
const arrowLeftShort = require("bootstrap-icons/icons/arrow-left-short.svg");
const arrowLeft = require("bootstrap-icons/icons/arrow-left.svg");
const arrowRepeat = require("bootstrap-icons/icons/arrow-repeat.svg");
const arrowReturnLeft = require("bootstrap-icons/icons/arrow-return-left.svg");
const arrowReturnRight = require("bootstrap-icons/icons/arrow-return-right.svg");
const arrowRightShort = require("bootstrap-icons/icons/arrow-right-short.svg");
const arrowRight = require("bootstrap-icons/icons/arrow-right.svg");
const arrowUpDown = require("bootstrap-icons/icons/arrow-up-down.svg");
const arrowUpLeft = require("bootstrap-icons/icons/arrow-up-left.svg");
const arrowUpRight = require("bootstrap-icons/icons/arrow-up-right.svg");
const arrowUpShort = require("bootstrap-icons/icons/arrow-up-short.svg");
const arrowUp = require("bootstrap-icons/icons/arrow-up.svg");
const arrowsAngleContract = require("bootstrap-icons/icons/arrows-angle-contract.svg");
const arrowsAngleExpand = require("bootstrap-icons/icons/arrows-angle-expand.svg");
const arrowsCollapse = require("bootstrap-icons/icons/arrows-collapse.svg");
const arrowsExpand = require("bootstrap-icons/icons/arrows-expand.svg");
const arrowsFullscreen = require("bootstrap-icons/icons/arrows-fullscreen.svg");
const arrowsMove = require("bootstrap-icons/icons/arrows-move.svg");
const aspectRatioFill = require("bootstrap-icons/icons/aspect-ratio-fill.svg");
const aspectRatio = require("bootstrap-icons/icons/aspect-ratio.svg");
const at = require("bootstrap-icons/icons/at.svg");
const awardFill = require("bootstrap-icons/icons/award-fill.svg");
const award = require("bootstrap-icons/icons/award.svg");
const backspaceFill = require("bootstrap-icons/icons/backspace-fill.svg");
const backspaceReverseFill = require("bootstrap-icons/icons/backspace-reverse-fill.svg");
const backspaceReverse = require("bootstrap-icons/icons/backspace-reverse.svg");
const backspace = require("bootstrap-icons/icons/backspace.svg");
const bagFill = require("bootstrap-icons/icons/bag-fill.svg");
const bag = require("bootstrap-icons/icons/bag.svg");
const barChartFill = require("bootstrap-icons/icons/bar-chart-fill.svg");
const barChart = require("bootstrap-icons/icons/bar-chart.svg");
const batteryCharging = require("bootstrap-icons/icons/battery-charging.svg");
const batteryFull = require("bootstrap-icons/icons/battery-full.svg");
const batteryHalf = require("bootstrap-icons/icons/battery-half.svg");
const battery = require("bootstrap-icons/icons/battery.svg");
const bellFill = require("bootstrap-icons/icons/bell-fill.svg");
const bell = require("bootstrap-icons/icons/bell.svg");
const blockquoteLeft = require("bootstrap-icons/icons/blockquote-left.svg");
const blockquoteRight = require("bootstrap-icons/icons/blockquote-right.svg");
const bookHalf = require("bootstrap-icons/icons/book-half.svg");
const book = require("bootstrap-icons/icons/book.svg");
const bookmarkCheck = require("bootstrap-icons/icons/bookmark-check.svg");
const bookmarkDash = require("bootstrap-icons/icons/bookmark-dash.svg");
const bookmarkFill = require("bootstrap-icons/icons/bookmark-fill.svg");
const bookmarkPlus = require("bootstrap-icons/icons/bookmark-plus.svg");
const bookmark = require("bootstrap-icons/icons/bookmark.svg");
const bookmarksFill = require("bootstrap-icons/icons/bookmarks-fill.svg");
const bookmarks = require("bootstrap-icons/icons/bookmarks.svg");
const bootstrapFill = require("bootstrap-icons/icons/bootstrap-fill.svg");
const bootstrapReboot = require("bootstrap-icons/icons/bootstrap-reboot.svg");
const bootstrap = require("bootstrap-icons/icons/bootstrap.svg");
const boundingBoxCircles = require("bootstrap-icons/icons/bounding-box-circles.svg");
const boundingBox = require("bootstrap-icons/icons/bounding-box.svg");
const boxArrowDownLeft = require("bootstrap-icons/icons/box-arrow-down-left.svg");
const boxArrowDownRight = require("bootstrap-icons/icons/box-arrow-down-right.svg");
const boxArrowDown = require("bootstrap-icons/icons/box-arrow-down.svg");
const boxArrowInDownLeft = require("bootstrap-icons/icons/box-arrow-in-down-left.svg");
const boxArrowInDownRight = require("bootstrap-icons/icons/box-arrow-in-down-right.svg");
const boxArrowInDown = require("bootstrap-icons/icons/box-arrow-in-down.svg");
const boxArrowInLeft = require("bootstrap-icons/icons/box-arrow-in-left.svg");
const boxArrowInRight = require("bootstrap-icons/icons/box-arrow-in-right.svg");
const boxArrowInUpLeft = require("bootstrap-icons/icons/box-arrow-in-up-left.svg");
const boxArrowInUpRight = require("bootstrap-icons/icons/box-arrow-in-up-right.svg");
const boxArrowInUp = require("bootstrap-icons/icons/box-arrow-in-up.svg");
const boxArrowLeft = require("bootstrap-icons/icons/box-arrow-left.svg");
const boxArrowRight = require("bootstrap-icons/icons/box-arrow-right.svg");
const boxArrowUpLeft = require("bootstrap-icons/icons/box-arrow-up-left.svg");
const boxArrowUpRight = require("bootstrap-icons/icons/box-arrow-up-right.svg");
const boxArrowUp = require("bootstrap-icons/icons/box-arrow-up.svg");
const braces = require("bootstrap-icons/icons/braces.svg");
const briefcaseFill = require("bootstrap-icons/icons/briefcase-fill.svg");
const briefcase = require("bootstrap-icons/icons/briefcase.svg");
const brightnessAltHighFill = require("bootstrap-icons/icons/brightness-alt-high-fill.svg");
const brightnessAltHigh = require("bootstrap-icons/icons/brightness-alt-high.svg");
const brightnessAltLowFill = require("bootstrap-icons/icons/brightness-alt-low-fill.svg");
const brightnessAltLow = require("bootstrap-icons/icons/brightness-alt-low.svg");
const brightnessHighFill = require("bootstrap-icons/icons/brightness-high-fill.svg");
const brightnessHigh = require("bootstrap-icons/icons/brightness-high.svg");
const brightnessLowFill = require("bootstrap-icons/icons/brightness-low-fill.svg");
const brightnessLow = require("bootstrap-icons/icons/brightness-low.svg");
const brush = require("bootstrap-icons/icons/brush.svg");
const bucketFill = require("bootstrap-icons/icons/bucket-fill.svg");
const bucket = require("bootstrap-icons/icons/bucket.svg");
const building = require("bootstrap-icons/icons/building.svg");
const bullseye = require("bootstrap-icons/icons/bullseye.svg");
const calendarFill = require("bootstrap-icons/icons/calendar-fill.svg");
const calendar = require("bootstrap-icons/icons/calendar.svg");
const cameraVideoFill = require("bootstrap-icons/icons/camera-video-fill.svg");
const cameraVideo = require("bootstrap-icons/icons/camera-video.svg");
const camera = require("bootstrap-icons/icons/camera.svg");
const capslockFill = require("bootstrap-icons/icons/capslock-fill.svg");
const capslock = require("bootstrap-icons/icons/capslock.svg");
const cardChecklist = require("bootstrap-icons/icons/card-checklist.svg");
const cardHeading = require("bootstrap-icons/icons/card-heading.svg");
const cardImage = require("bootstrap-icons/icons/card-image.svg");
const cardList = require("bootstrap-icons/icons/card-list.svg");
const cardText = require("bootstrap-icons/icons/card-text.svg");
const caretDownFill = require("bootstrap-icons/icons/caret-down-fill.svg");
const caretDown = require("bootstrap-icons/icons/caret-down.svg");
const caretLeftFill = require("bootstrap-icons/icons/caret-left-fill.svg");
const caretLeft = require("bootstrap-icons/icons/caret-left.svg");
const caretRightFill = require("bootstrap-icons/icons/caret-right-fill.svg");
const caretRight = require("bootstrap-icons/icons/caret-right.svg");
const caretUpFill = require("bootstrap-icons/icons/caret-up-fill.svg");
const caretUp = require("bootstrap-icons/icons/caret-up.svg");
const chatDotsFill = require("bootstrap-icons/icons/chat-dots-fill.svg");
const chatDots = require("bootstrap-icons/icons/chat-dots.svg");
const chatFill = require("bootstrap-icons/icons/chat-fill.svg");
const chatQuoteFill = require("bootstrap-icons/icons/chat-quote-fill.svg");
const chatQuote = require("bootstrap-icons/icons/chat-quote.svg");
const chatSquareDotsFill = require("bootstrap-icons/icons/chat-square-dots-fill.svg");
const chatSquareDots = require("bootstrap-icons/icons/chat-square-dots.svg");
const chatSquareFill = require("bootstrap-icons/icons/chat-square-fill.svg");
const chatSquareQuoteFill = require("bootstrap-icons/icons/chat-square-quote-fill.svg");
const chatSquareQuote = require("bootstrap-icons/icons/chat-square-quote.svg");
const chatSquare = require("bootstrap-icons/icons/chat-square.svg");
const chat = require("bootstrap-icons/icons/chat.svg");
const checkAll = require("bootstrap-icons/icons/check-all.svg");
const checkBox = require("bootstrap-icons/icons/check-box.svg");
const checkCircle = require("bootstrap-icons/icons/check-circle.svg");
const check = require("bootstrap-icons/icons/check.svg");
const chevronBarContract = require("bootstrap-icons/icons/chevron-bar-contract.svg");
const chevronBarDown = require("bootstrap-icons/icons/chevron-bar-down.svg");
const chevronBarExpand = require("bootstrap-icons/icons/chevron-bar-expand.svg");
const chevronBarLeft = require("bootstrap-icons/icons/chevron-bar-left.svg");
const chevronBarRight = require("bootstrap-icons/icons/chevron-bar-right.svg");
const chevronBarUp = require("bootstrap-icons/icons/chevron-bar-up.svg");
const chevronCompactDown = require("bootstrap-icons/icons/chevron-compact-down.svg");
const chevronCompactLeft = require("bootstrap-icons/icons/chevron-compact-left.svg");
const chevronCompactRight = require("bootstrap-icons/icons/chevron-compact-right.svg");
const chevronCompactUp = require("bootstrap-icons/icons/chevron-compact-up.svg");
const chevronContract = require("bootstrap-icons/icons/chevron-contract.svg");
const chevronDoubleDown = require("bootstrap-icons/icons/chevron-double-down.svg");
const chevronDoubleLeft = require("bootstrap-icons/icons/chevron-double-left.svg");
const chevronDoubleRight = require("bootstrap-icons/icons/chevron-double-right.svg");
const chevronDoubleUp = require("bootstrap-icons/icons/chevron-double-up.svg");
const chevronDown = require("bootstrap-icons/icons/chevron-down.svg");
const chevronExpand = require("bootstrap-icons/icons/chevron-expand.svg");
const chevronLeft = require("bootstrap-icons/icons/chevron-left.svg");
const chevronRight = require("bootstrap-icons/icons/chevron-right.svg");
const chevronUp = require("bootstrap-icons/icons/chevron-up.svg");
const circleFill = require("bootstrap-icons/icons/circle-fill.svg");
const circleHalf = require("bootstrap-icons/icons/circle-half.svg");
const circleSquare = require("bootstrap-icons/icons/circle-square.svg");
const circle = require("bootstrap-icons/icons/circle.svg");
const clipboardData = require("bootstrap-icons/icons/clipboard-data.svg");
const clipboard = require("bootstrap-icons/icons/clipboard.svg");
const clockFill = require("bootstrap-icons/icons/clock-fill.svg");
const clockHistory = require("bootstrap-icons/icons/clock-history.svg");
const clock = require("bootstrap-icons/icons/clock.svg");
const cloudDownload = require("bootstrap-icons/icons/cloud-download.svg");
const cloudFill = require("bootstrap-icons/icons/cloud-fill.svg");
const cloudUpload = require("bootstrap-icons/icons/cloud-upload.svg");
const cloud = require("bootstrap-icons/icons/cloud.svg");
const codeSlash = require("bootstrap-icons/icons/code-slash.svg");
const code = require("bootstrap-icons/icons/code.svg");
const collectionFill = require("bootstrap-icons/icons/collection-fill.svg");
const collectionPlayFill = require("bootstrap-icons/icons/collection-play-fill.svg");
const collectionPlay = require("bootstrap-icons/icons/collection-play.svg");
const collection = require("bootstrap-icons/icons/collection.svg");
const columnsGap = require("bootstrap-icons/icons/columns-gap.svg");
const columns = require("bootstrap-icons/icons/columns.svg");
const command = require("bootstrap-icons/icons/command.svg");
const compass = require("bootstrap-icons/icons/compass.svg");
const coneStriped = require("bootstrap-icons/icons/cone-striped.svg");
const cone = require("bootstrap-icons/icons/cone.svg");
const controller = require("bootstrap-icons/icons/controller.svg");
const creditCard = require("bootstrap-icons/icons/credit-card.svg");
const crop = require("bootstrap-icons/icons/crop.svg");
const cursorFill = require("bootstrap-icons/icons/cursor-fill.svg");
const cursorText = require("bootstrap-icons/icons/cursor-text.svg");
const cursor = require("bootstrap-icons/icons/cursor.svg");
const dashCircleFill = require("bootstrap-icons/icons/dash-circle-fill.svg");
const dashCircle = require("bootstrap-icons/icons/dash-circle.svg");
const dashSquareFill = require("bootstrap-icons/icons/dash-square-fill.svg");
const dashSquare = require("bootstrap-icons/icons/dash-square.svg");
const dash = require("bootstrap-icons/icons/dash.svg");
const diamondFill = require("bootstrap-icons/icons/diamond-fill.svg");
const diamondHalf = require("bootstrap-icons/icons/diamond-half.svg");
const diamond = require("bootstrap-icons/icons/diamond.svg");
const displayFill = require("bootstrap-icons/icons/display-fill.svg");
const display = require("bootstrap-icons/icons/display.svg");
const dot = require("bootstrap-icons/icons/dot.svg");
const download = require("bootstrap-icons/icons/download.svg");
const dropletFill = require("bootstrap-icons/icons/droplet-fill.svg");
const dropletHalf = require("bootstrap-icons/icons/droplet-half.svg");
const droplet = require("bootstrap-icons/icons/droplet.svg");
const eggFill = require("bootstrap-icons/icons/egg-fill.svg");
const eggFried = require("bootstrap-icons/icons/egg-fried.svg");
const egg = require("bootstrap-icons/icons/egg.svg");
const ejectFill = require("bootstrap-icons/icons/eject-fill.svg");
const eject = require("bootstrap-icons/icons/eject.svg");
const envelopeFill = require("bootstrap-icons/icons/envelope-fill.svg");
const envelopeOpenFill = require("bootstrap-icons/icons/envelope-open-fill.svg");
const envelopeOpen = require("bootstrap-icons/icons/envelope-open.svg");
const envelope = require("bootstrap-icons/icons/envelope.svg");
const exclamationCircleFill = require("bootstrap-icons/icons/exclamation-circle-fill.svg");
const exclamationCircle = require("bootstrap-icons/icons/exclamation-circle.svg");
const exclamationDiamondFill = require("bootstrap-icons/icons/exclamation-diamond-fill.svg");
const exclamationDiamond = require("bootstrap-icons/icons/exclamation-diamond.svg");
const exclamationOctagonFill = require("bootstrap-icons/icons/exclamation-octagon-fill.svg");
const exclamationOctagon = require("bootstrap-icons/icons/exclamation-octagon.svg");
const exclamationSquareFill = require("bootstrap-icons/icons/exclamation-square-fill.svg");
const exclamationSquare = require("bootstrap-icons/icons/exclamation-square.svg");
const exclamationTriangleFill = require("bootstrap-icons/icons/exclamation-triangle-fill.svg");
const exclamationTriangle = require("bootstrap-icons/icons/exclamation-triangle.svg");
const exclamation = require("bootstrap-icons/icons/exclamation.svg");
const exclude = require("bootstrap-icons/icons/exclude.svg");
const eyeFill = require("bootstrap-icons/icons/eye-fill.svg");
const eyeSlashFill = require("bootstrap-icons/icons/eye-slash-fill.svg");
const eyeSlash = require("bootstrap-icons/icons/eye-slash.svg");
const eye = require("bootstrap-icons/icons/eye.svg");
const fileArrowDown = require("bootstrap-icons/icons/file-arrow-down.svg");
const fileArrowUp = require("bootstrap-icons/icons/file-arrow-up.svg");
const fileBreak = require("bootstrap-icons/icons/file-break.svg");
const fileCheck = require("bootstrap-icons/icons/file-check.svg");
const fileCode = require("bootstrap-icons/icons/file-code.svg");
const fileDiff = require("bootstrap-icons/icons/file-diff.svg");
const fileEarmarkArrowDown = require("bootstrap-icons/icons/file-earmark-arrow-down.svg");
const fileEarmarkArrowUp = require("bootstrap-icons/icons/file-earmark-arrow-up.svg");
const fileEarmarkBreak = require("bootstrap-icons/icons/file-earmark-break.svg");
const fileEarmarkCheck = require("bootstrap-icons/icons/file-earmark-check.svg");
const fileEarmarkCode = require("bootstrap-icons/icons/file-earmark-code.svg");
const fileEarmarkDiff = require("bootstrap-icons/icons/file-earmark-diff.svg");
const fileEarmarkMinus = require("bootstrap-icons/icons/file-earmark-minus.svg");
const fileEarmarkPlus = require("bootstrap-icons/icons/file-earmark-plus.svg");
const fileEarmarkRuled = require("bootstrap-icons/icons/file-earmark-ruled.svg");
const fileEarmarkSpreadsheet = require("bootstrap-icons/icons/file-earmark-spreadsheet.svg");
const fileEarmarkText = require("bootstrap-icons/icons/file-earmark-text.svg");
const fileEarmarkZip = require("bootstrap-icons/icons/file-earmark-zip.svg");
const fileEarmark = require("bootstrap-icons/icons/file-earmark.svg");
const fileMinus = require("bootstrap-icons/icons/file-minus.svg");
const filePlus = require("bootstrap-icons/icons/file-plus.svg");
const filePost = require("bootstrap-icons/icons/file-post.svg");
const fileRichtext = require("bootstrap-icons/icons/file-richtext.svg");
const fileRuled = require("bootstrap-icons/icons/file-ruled.svg");
const fileSpreadsheet = require("bootstrap-icons/icons/file-spreadsheet.svg");
const fileText = require("bootstrap-icons/icons/file-text.svg");
const fileZip = require("bootstrap-icons/icons/file-zip.svg");
const file = require("bootstrap-icons/icons/file.svg");
const filesAlt = require("bootstrap-icons/icons/files-alt.svg");
const files = require("bootstrap-icons/icons/files.svg");
const film = require("bootstrap-icons/icons/film.svg");
const filterLeft = require("bootstrap-icons/icons/filter-left.svg");
const filterRight = require("bootstrap-icons/icons/filter-right.svg");
const filter = require("bootstrap-icons/icons/filter.svg");
const flagFill = require("bootstrap-icons/icons/flag-fill.svg");
const flag = require("bootstrap-icons/icons/flag.svg");
const folderCheck = require("bootstrap-icons/icons/folder-check.svg");
const folderFill = require("bootstrap-icons/icons/folder-fill.svg");
const folderMinus = require("bootstrap-icons/icons/folder-minus.svg");
const folderPlus = require("bootstrap-icons/icons/folder-plus.svg");
const folderSymlinkFill = require("bootstrap-icons/icons/folder-symlink-fill.svg");
const folderSymlink = require("bootstrap-icons/icons/folder-symlink.svg");
const folder = require("bootstrap-icons/icons/folder.svg");
const fonts = require("bootstrap-icons/icons/fonts.svg");
const forwardFill = require("bootstrap-icons/icons/forward-fill.svg");
const forward = require("bootstrap-icons/icons/forward.svg");
const fullscreenExit = require("bootstrap-icons/icons/fullscreen-exit.svg");
const fullscreen = require("bootstrap-icons/icons/fullscreen.svg");
const funnelFill = require("bootstrap-icons/icons/funnel-fill.svg");
const funnel = require("bootstrap-icons/icons/funnel.svg");
const gearFill = require("bootstrap-icons/icons/gear-fill.svg");
const gearWideConnected = require("bootstrap-icons/icons/gear-wide-connected.svg");
const gearWide = require("bootstrap-icons/icons/gear-wide.svg");
const gear = require("bootstrap-icons/icons/gear.svg");
const gem = require("bootstrap-icons/icons/gem.svg");
const geoAlt = require("bootstrap-icons/icons/geo-alt.svg");
const geo = require("bootstrap-icons/icons/geo.svg");
const giftFill = require("bootstrap-icons/icons/gift-fill.svg");
const gift = require("bootstrap-icons/icons/gift.svg");
const graphDown = require("bootstrap-icons/icons/graph-down.svg");
const graphUp = require("bootstrap-icons/icons/graph-up.svg");
const grid1x2Fill = require("bootstrap-icons/icons/grid-1x2-fill.svg");
const grid1x2 = require("bootstrap-icons/icons/grid-1x2.svg");
const grid3x2GapFill = require("bootstrap-icons/icons/grid-3x2-gap-fill.svg");
const grid3x2Gap = require("bootstrap-icons/icons/grid-3x2-gap.svg");
const grid3x2 = require("bootstrap-icons/icons/grid-3x2.svg");
const grid3x3GapFill = require("bootstrap-icons/icons/grid-3x3-gap-fill.svg");
const grid3x3Gap = require("bootstrap-icons/icons/grid-3x3-gap.svg");
const grid3x3 = require("bootstrap-icons/icons/grid-3x3.svg");
const gridFill = require("bootstrap-icons/icons/grid-fill.svg");
const grid = require("bootstrap-icons/icons/grid.svg");
const hammer = require("bootstrap-icons/icons/hammer.svg");
const hash = require("bootstrap-icons/icons/hash.svg");
const heartFill = require("bootstrap-icons/icons/heart-fill.svg");
const heartHalf = require("bootstrap-icons/icons/heart-half.svg");
const heart = require("bootstrap-icons/icons/heart.svg");
const houseDoorFill = require("bootstrap-icons/icons/house-door-fill.svg");
const houseDoor = require("bootstrap-icons/icons/house-door.svg");
const houseFill = require("bootstrap-icons/icons/house-fill.svg");
const house = require("bootstrap-icons/icons/house.svg");
const hr = require("bootstrap-icons/icons/hr.svg");
const imageAlt = require("bootstrap-icons/icons/image-alt.svg");
const imageFill = require("bootstrap-icons/icons/image-fill.svg");
const image = require("bootstrap-icons/icons/image.svg");
const images = require("bootstrap-icons/icons/images.svg");
const inboxFill = require("bootstrap-icons/icons/inbox-fill.svg");
const inbox = require("bootstrap-icons/icons/inbox.svg");
const inboxesFill = require("bootstrap-icons/icons/inboxes-fill.svg");
const inboxes = require("bootstrap-icons/icons/inboxes.svg");
const infoCircleFill = require("bootstrap-icons/icons/info-circle-fill.svg");
const infoCircle = require("bootstrap-icons/icons/info-circle.svg");
const infoSquareFill = require("bootstrap-icons/icons/info-square-fill.svg");
const infoSquare = require("bootstrap-icons/icons/info-square.svg");
const info = require("bootstrap-icons/icons/info.svg");
const intersect = require("bootstrap-icons/icons/intersect.svg");
const justifyLeft = require("bootstrap-icons/icons/justify-left.svg");
const justifyRight = require("bootstrap-icons/icons/justify-right.svg");
const justify = require("bootstrap-icons/icons/justify.svg");
const kanbanFill = require("bootstrap-icons/icons/kanban-fill.svg");
const kanban = require("bootstrap-icons/icons/kanban.svg");
const laptop = require("bootstrap-icons/icons/laptop.svg");
const layersFill = require("bootstrap-icons/icons/layers-fill.svg");
const layersHalf = require("bootstrap-icons/icons/layers-half.svg");
const layers = require("bootstrap-icons/icons/layers.svg");
const layoutSidebarInsetReverse = require("bootstrap-icons/icons/layout-sidebar-inset-reverse.svg");
const layoutSidebarInset = require("bootstrap-icons/icons/layout-sidebar-inset.svg");
const layoutSidebarReverse = require("bootstrap-icons/icons/layout-sidebar-reverse.svg");
const layoutSidebar = require("bootstrap-icons/icons/layout-sidebar.svg");
const layoutSplit = require("bootstrap-icons/icons/layout-split.svg");
const layoutTextSidebarReverse = require("bootstrap-icons/icons/layout-text-sidebar-reverse.svg");
const layoutTextSidebar = require("bootstrap-icons/icons/layout-text-sidebar.svg");
const layoutTextWindowReverse = require("bootstrap-icons/icons/layout-text-window-reverse.svg");
const layoutTextWindow = require("bootstrap-icons/icons/layout-text-window.svg");
const layoutThreeColumns = require("bootstrap-icons/icons/layout-three-columns.svg");
const layoutWtf = require("bootstrap-icons/icons/layout-wtf.svg");
const lifePreserver = require("bootstrap-icons/icons/life-preserver.svg");
const lightningFill = require("bootstrap-icons/icons/lightning-fill.svg");
const lightning = require("bootstrap-icons/icons/lightning.svg");
const link45deg = require("bootstrap-icons/icons/link-45deg.svg");
const link = require("bootstrap-icons/icons/link.svg");
const listCheck = require("bootstrap-icons/icons/list-check.svg");
const listNested = require("bootstrap-icons/icons/list-nested.svg");
const listOl = require("bootstrap-icons/icons/list-ol.svg");
const listTask = require("bootstrap-icons/icons/list-task.svg");
const listUl = require("bootstrap-icons/icons/list-ul.svg");
const list = require("bootstrap-icons/icons/list.svg");
const lockFill = require("bootstrap-icons/icons/lock-fill.svg");
const lock = require("bootstrap-icons/icons/lock.svg");
const map = require("bootstrap-icons/icons/map.svg");
const micFill = require("bootstrap-icons/icons/mic-fill.svg");
const micMuteFill = require("bootstrap-icons/icons/mic-mute-fill.svg");
const micMute = require("bootstrap-icons/icons/mic-mute.svg");
const mic = require("bootstrap-icons/icons/mic.svg");
const moon = require("bootstrap-icons/icons/moon.svg");
const musicNoteBeamed = require("bootstrap-icons/icons/music-note-beamed.svg");
const musicNoteList = require("bootstrap-icons/icons/music-note-list.svg");
const musicNote = require("bootstrap-icons/icons/music-note.svg");
const musicPlayerFill = require("bootstrap-icons/icons/music-player-fill.svg");
const musicPlayer = require("bootstrap-icons/icons/music-player.svg");
const newspaper = require("bootstrap-icons/icons/newspaper.svg");
const octagonFill = require("bootstrap-icons/icons/octagon-fill.svg");
const octagonHalf = require("bootstrap-icons/icons/octagon-half.svg");
const octagon = require("bootstrap-icons/icons/octagon.svg");
const option = require("bootstrap-icons/icons/option.svg");
const outlet = require("bootstrap-icons/icons/outlet.svg");
const paperclip = require("bootstrap-icons/icons/paperclip.svg");
const pauseFill = require("bootstrap-icons/icons/pause-fill.svg");
const pause = require("bootstrap-icons/icons/pause.svg");
const pen = require("bootstrap-icons/icons/pen.svg");
const pencilSquare = require("bootstrap-icons/icons/pencil-square.svg");
const pencil = require("bootstrap-icons/icons/pencil.svg");
const pentagonFill = require("bootstrap-icons/icons/pentagon-fill.svg");
const pentagonHalf = require("bootstrap-icons/icons/pentagon-half.svg");
const pentagon = require("bootstrap-icons/icons/pentagon.svg");
const peopleCircle = require("bootstrap-icons/icons/people-circle.svg");
const peopleFill = require("bootstrap-icons/icons/people-fill.svg");
const people = require("bootstrap-icons/icons/people.svg");
const personBoundingBox = require("bootstrap-icons/icons/person-bounding-box.svg");
const personCheckFill = require("bootstrap-icons/icons/person-check-fill.svg");
const personCheck = require("bootstrap-icons/icons/person-check.svg");
const personDashFill = require("bootstrap-icons/icons/person-dash-fill.svg");
const personDash = require("bootstrap-icons/icons/person-dash.svg");
const personFill = require("bootstrap-icons/icons/person-fill.svg");
const personLinesFill = require("bootstrap-icons/icons/person-lines-fill.svg");
const personPlusFill = require("bootstrap-icons/icons/person-plus-fill.svg");
const personPlus = require("bootstrap-icons/icons/person-plus.svg");
const personSquare = require("bootstrap-icons/icons/person-square.svg");
const person = require("bootstrap-icons/icons/person.svg");
const phoneLandscape = require("bootstrap-icons/icons/phone-landscape.svg");
const phone = require("bootstrap-icons/icons/phone.svg");
const pieChartFill = require("bootstrap-icons/icons/pie-chart-fill.svg");
const pieChart = require("bootstrap-icons/icons/pie-chart.svg");
const pipFill = require("bootstrap-icons/icons/pip-fill.svg");
const pip = require("bootstrap-icons/icons/pip.svg");
const playFill = require("bootstrap-icons/icons/play-fill.svg");
const play = require("bootstrap-icons/icons/play.svg");
const plug = require("bootstrap-icons/icons/plug.svg");
const plusCircleFill = require("bootstrap-icons/icons/plus-circle-fill.svg");
const plusCircle = require("bootstrap-icons/icons/plus-circle.svg");
const plusSquareFill = require("bootstrap-icons/icons/plus-square-fill.svg");
const plusSquare = require("bootstrap-icons/icons/plus-square.svg");
const plus = require("bootstrap-icons/icons/plus.svg");
const power = require("bootstrap-icons/icons/power.svg");
const puzzleFill = require("bootstrap-icons/icons/puzzle-fill.svg");
const puzzle = require("bootstrap-icons/icons/puzzle.svg");
const questionCircleFill = require("bootstrap-icons/icons/question-circle-fill.svg");
const questionCircle = require("bootstrap-icons/icons/question-circle.svg");
const questionDiamondFill = require("bootstrap-icons/icons/question-diamond-fill.svg");
const questionDiamond = require("bootstrap-icons/icons/question-diamond.svg");
const questionOctagonFill = require("bootstrap-icons/icons/question-octagon-fill.svg");
const questionOctagon = require("bootstrap-icons/icons/question-octagon.svg");
const questionSquareFill = require("bootstrap-icons/icons/question-square-fill.svg");
const questionSquare = require("bootstrap-icons/icons/question-square.svg");
const question = require("bootstrap-icons/icons/question.svg");
const replyAllFill = require("bootstrap-icons/icons/reply-all-fill.svg");
const replyAll = require("bootstrap-icons/icons/reply-all.svg");
const replyFill = require("bootstrap-icons/icons/reply-fill.svg");
const reply = require("bootstrap-icons/icons/reply.svg");
const screwdriver = require("bootstrap-icons/icons/screwdriver.svg");
const search = require("bootstrap-icons/icons/search.svg");
const server = require("bootstrap-icons/icons/server.svg");
const shieldFill = require("bootstrap-icons/icons/shield-fill.svg");
const shieldLockFill = require("bootstrap-icons/icons/shield-lock-fill.svg");
const shieldLock = require("bootstrap-icons/icons/shield-lock.svg");
const shieldShaded = require("bootstrap-icons/icons/shield-shaded.svg");
const shield = require("bootstrap-icons/icons/shield.svg");
const shiftFill = require("bootstrap-icons/icons/shift-fill.svg");
const shift = require("bootstrap-icons/icons/shift.svg");
const shuffle = require("bootstrap-icons/icons/shuffle.svg");
const skipBackwardFill = require("bootstrap-icons/icons/skip-backward-fill.svg");
const skipBackward = require("bootstrap-icons/icons/skip-backward.svg");
const skipEndFill = require("bootstrap-icons/icons/skip-end-fill.svg");
const skipEnd = require("bootstrap-icons/icons/skip-end.svg");
const skipForwardFill = require("bootstrap-icons/icons/skip-forward-fill.svg");
const skipForward = require("bootstrap-icons/icons/skip-forward.svg");
const skipStartFill = require("bootstrap-icons/icons/skip-start-fill.svg");
const skipStart = require("bootstrap-icons/icons/skip-start.svg");
const slashCircleFill = require("bootstrap-icons/icons/slash-circle-fill.svg");
const slashCircle = require("bootstrap-icons/icons/slash-circle.svg");
const slashSquareFill = require("bootstrap-icons/icons/slash-square-fill.svg");
const slashSquare = require("bootstrap-icons/icons/slash-square.svg");
const slash = require("bootstrap-icons/icons/slash.svg");
const sliders = require("bootstrap-icons/icons/sliders.svg");
const soundwave = require("bootstrap-icons/icons/soundwave.svg");
const speaker = require("bootstrap-icons/icons/speaker.svg");
const squareFill = require("bootstrap-icons/icons/square-fill.svg");
const squareHalf = require("bootstrap-icons/icons/square-half.svg");
const square = require("bootstrap-icons/icons/square.svg");
const starFill = require("bootstrap-icons/icons/star-fill.svg");
const starHalf = require("bootstrap-icons/icons/star-half.svg");
const star = require("bootstrap-icons/icons/star.svg");
const stopFill = require("bootstrap-icons/icons/stop-fill.svg");
const stop = require("bootstrap-icons/icons/stop.svg");
const stopwatchFill = require("bootstrap-icons/icons/stopwatch-fill.svg");
const stopwatch = require("bootstrap-icons/icons/stopwatch.svg");
const subtract = require("bootstrap-icons/icons/subtract.svg");
const sun = require("bootstrap-icons/icons/sun.svg");
const table = require("bootstrap-icons/icons/table.svg");
const tabletLandscape = require("bootstrap-icons/icons/tablet-landscape.svg");
const tablet = require("bootstrap-icons/icons/tablet.svg");
const tagFill = require("bootstrap-icons/icons/tag-fill.svg");
const tag = require("bootstrap-icons/icons/tag.svg");
const terminalFill = require("bootstrap-icons/icons/terminal-fill.svg");
const terminal = require("bootstrap-icons/icons/terminal.svg");
const textCenter = require("bootstrap-icons/icons/text-center.svg");
const textIndentLeft = require("bootstrap-icons/icons/text-indent-left.svg");
const textIndentRight = require("bootstrap-icons/icons/text-indent-right.svg");
const textLeft = require("bootstrap-icons/icons/text-left.svg");
const textRight = require("bootstrap-icons/icons/text-right.svg");
const textareaT = require("bootstrap-icons/icons/textarea-t.svg");
const textarea = require("bootstrap-icons/icons/textarea.svg");
const threeDotsVertical = require("bootstrap-icons/icons/three-dots-vertical.svg");
const threeDots = require("bootstrap-icons/icons/three-dots.svg");
const toggleOff = require("bootstrap-icons/icons/toggle-off.svg");
const toggleOn = require("bootstrap-icons/icons/toggle-on.svg");
const toggles = require("bootstrap-icons/icons/toggles.svg");
const tools = require("bootstrap-icons/icons/tools.svg");
const trashFill = require("bootstrap-icons/icons/trash-fill.svg");
const trash = require("bootstrap-icons/icons/trash.svg");
const trash2Fill = require("bootstrap-icons/icons/trash2-fill.svg");
const trash2 = require("bootstrap-icons/icons/trash2.svg");
const triangleFill = require("bootstrap-icons/icons/triangle-fill.svg");
const triangleHalf = require("bootstrap-icons/icons/triangle-half.svg");
const triangle = require("bootstrap-icons/icons/triangle.svg");
const trophy = require("bootstrap-icons/icons/trophy.svg");
const tvFill = require("bootstrap-icons/icons/tv-fill.svg");
const tv = require("bootstrap-icons/icons/tv.svg");
const typeBold = require("bootstrap-icons/icons/type-bold.svg");
const typeH1 = require("bootstrap-icons/icons/type-h1.svg");
const typeH2 = require("bootstrap-icons/icons/type-h2.svg");
const typeH3 = require("bootstrap-icons/icons/type-h3.svg");
const typeItalic = require("bootstrap-icons/icons/type-italic.svg");
const typeStrikethrough = require("bootstrap-icons/icons/type-strikethrough.svg");
const typeUnderline = require("bootstrap-icons/icons/type-underline.svg");
const type = require("bootstrap-icons/icons/type.svg");
const union = require("bootstrap-icons/icons/union.svg");
const unlockFill = require("bootstrap-icons/icons/unlock-fill.svg");
const unlock = require("bootstrap-icons/icons/unlock.svg");
const upload = require("bootstrap-icons/icons/upload.svg");
const viewList = require("bootstrap-icons/icons/view-list.svg");
const viewStacked = require("bootstrap-icons/icons/view-stacked.svg");
const volumeDownFill = require("bootstrap-icons/icons/volume-down-fill.svg");
const volumeDown = require("bootstrap-icons/icons/volume-down.svg");
const volumeMuteFill = require("bootstrap-icons/icons/volume-mute-fill.svg");
const volumeMute = require("bootstrap-icons/icons/volume-mute.svg");
const volumeUpFill = require("bootstrap-icons/icons/volume-up-fill.svg");
const volumeUp = require("bootstrap-icons/icons/volume-up.svg");
const vr = require("bootstrap-icons/icons/vr.svg");
const wallet = require("bootstrap-icons/icons/wallet.svg");
const watch = require("bootstrap-icons/icons/watch.svg");
const wifi = require("bootstrap-icons/icons/wifi.svg");
const window = require("bootstrap-icons/icons/window.svg");
const wrench = require("bootstrap-icons/icons/wrench.svg");
const xCircleFill = require("bootstrap-icons/icons/x-circle-fill.svg");
const xCircle = require("bootstrap-icons/icons/x-circle.svg");
const xDiamondFill = require("bootstrap-icons/icons/x-diamond-fill.svg");
const xDiamond = require("bootstrap-icons/icons/x-diamond.svg");
const xOctagonFill = require("bootstrap-icons/icons/x-octagon-fill.svg");
const xOctagon = require("bootstrap-icons/icons/x-octagon.svg");
const xSquareFill = require("bootstrap-icons/icons/x-square-fill.svg");
const xSquare = require("bootstrap-icons/icons/x-square.svg");
const x = require("bootstrap-icons/icons/x.svg");

// Renders an icon by type
export const Icons = (iconType:number, height?:number, width?:number) => {
	// See which icon is selected
	switch(iconType) {
		// alarm-fill.svg
		case 1:
			return generateIcon(alarmFill, height, width);
		// alarm.svg
		case 2:
			return generateIcon(alarm, height, width);
		// alt.svg
		case 3:
			return generateIcon(alt, height, width);
		// app-indicator.svg
		case 4:
			return generateIcon(appIndicator, height, width);
		// app.svg
		case 5:
			return generateIcon(app, height, width);
		// archive-fill.svg
		case 6:
			return generateIcon(archiveFill, height, width);
		// archive.svg
		case 7:
			return generateIcon(archive, height, width);
		// arrow-90deg-down.svg
		case 8:
			return generateIcon(arrow90degDown, height, width);
		// arrow-90deg-left.svg
		case 9:
			return generateIcon(arrow90degLeft, height, width);
		// arrow-90deg-right.svg
		case 10:
			return generateIcon(arrow90degRight, height, width);
		// arrow-90deg-up.svg
		case 11:
			return generateIcon(arrow90degUp, height, width);
		// arrow-bar-down.svg
		case 12:
			return generateIcon(arrowBarDown, height, width);
		// arrow-bar-left.svg
		case 13:
			return generateIcon(arrowBarLeft, height, width);
		// arrow-bar-right.svg
		case 14:
			return generateIcon(arrowBarRight, height, width);
		// arrow-bar-up.svg
		case 15:
			return generateIcon(arrowBarUp, height, width);
		// arrow-clockwise.svg
		case 16:
			return generateIcon(arrowClockwise, height, width);
		// arrow-counterclockwise.svg
		case 17:
			return generateIcon(arrowCounterclockwise, height, width);
		// arrow-down-left.svg
		case 18:
			return generateIcon(arrowDownLeft, height, width);
		// arrow-down-right.svg
		case 19:
			return generateIcon(arrowDownRight, height, width);
		// arrow-down-short.svg
		case 20:
			return generateIcon(arrowDownShort, height, width);
		// arrow-down.svg
		case 21:
			return generateIcon(arrowDown, height, width);
		// arrow-left-right.svg
		case 22:
			return generateIcon(arrowLeftRight, height, width);
		// arrow-left-short.svg
		case 23:
			return generateIcon(arrowLeftShort, height, width);
		// arrow-left.svg
		case 24:
			return generateIcon(arrowLeft, height, width);
		// arrow-repeat.svg
		case 25:
			return generateIcon(arrowRepeat, height, width);
		// arrow-return-left.svg
		case 26:
			return generateIcon(arrowReturnLeft, height, width);
		// arrow-return-right.svg
		case 27:
			return generateIcon(arrowReturnRight, height, width);
		// arrow-right-short.svg
		case 28:
			return generateIcon(arrowRightShort, height, width);
		// arrow-right.svg
		case 29:
			return generateIcon(arrowRight, height, width);
		// arrow-up-down.svg
		case 30:
			return generateIcon(arrowUpDown, height, width);
		// arrow-up-left.svg
		case 31:
			return generateIcon(arrowUpLeft, height, width);
		// arrow-up-right.svg
		case 32:
			return generateIcon(arrowUpRight, height, width);
		// arrow-up-short.svg
		case 33:
			return generateIcon(arrowUpShort, height, width);
		// arrow-up.svg
		case 34:
			return generateIcon(arrowUp, height, width);
		// arrows-angle-contract.svg
		case 35:
			return generateIcon(arrowsAngleContract, height, width);
		// arrows-angle-expand.svg
		case 36:
			return generateIcon(arrowsAngleExpand, height, width);
		// arrows-collapse.svg
		case 37:
			return generateIcon(arrowsCollapse, height, width);
		// arrows-expand.svg
		case 38:
			return generateIcon(arrowsExpand, height, width);
		// arrows-fullscreen.svg
		case 39:
			return generateIcon(arrowsFullscreen, height, width);
		// arrows-move.svg
		case 40:
			return generateIcon(arrowsMove, height, width);
		// aspect-ratio-fill.svg
		case 41:
			return generateIcon(aspectRatioFill, height, width);
		// aspect-ratio.svg
		case 42:
			return generateIcon(aspectRatio, height, width);
		// at.svg
		case 43:
			return generateIcon(at, height, width);
		// award-fill.svg
		case 44:
			return generateIcon(awardFill, height, width);
		// award.svg
		case 45:
			return generateIcon(award, height, width);
		// backspace-fill.svg
		case 46:
			return generateIcon(backspaceFill, height, width);
		// backspace-reverse-fill.svg
		case 47:
			return generateIcon(backspaceReverseFill, height, width);
		// backspace-reverse.svg
		case 48:
			return generateIcon(backspaceReverse, height, width);
		// backspace.svg
		case 49:
			return generateIcon(backspace, height, width);
		// bag-fill.svg
		case 50:
			return generateIcon(bagFill, height, width);
		// bag.svg
		case 51:
			return generateIcon(bag, height, width);
		// bar-chart-fill.svg
		case 52:
			return generateIcon(barChartFill, height, width);
		// bar-chart.svg
		case 53:
			return generateIcon(barChart, height, width);
		// battery-charging.svg
		case 54:
			return generateIcon(batteryCharging, height, width);
		// battery-full.svg
		case 55:
			return generateIcon(batteryFull, height, width);
		// battery-half.svg
		case 56:
			return generateIcon(batteryHalf, height, width);
		// battery.svg
		case 57:
			return generateIcon(battery, height, width);
		// bell-fill.svg
		case 58:
			return generateIcon(bellFill, height, width);
		// bell.svg
		case 59:
			return generateIcon(bell, height, width);
		// blockquote-left.svg
		case 60:
			return generateIcon(blockquoteLeft, height, width);
		// blockquote-right.svg
		case 61:
			return generateIcon(blockquoteRight, height, width);
		// book-half.svg
		case 62:
			return generateIcon(bookHalf, height, width);
		// book.svg
		case 63:
			return generateIcon(book, height, width);
		// bookmark-check.svg
		case 64:
			return generateIcon(bookmarkCheck, height, width);
		// bookmark-dash.svg
		case 65:
			return generateIcon(bookmarkDash, height, width);
		// bookmark-fill.svg
		case 66:
			return generateIcon(bookmarkFill, height, width);
		// bookmark-plus.svg
		case 67:
			return generateIcon(bookmarkPlus, height, width);
		// bookmark.svg
		case 68:
			return generateIcon(bookmark, height, width);
		// bookmarks-fill.svg
		case 69:
			return generateIcon(bookmarksFill, height, width);
		// bookmarks.svg
		case 70:
			return generateIcon(bookmarks, height, width);
		// bootstrap-fill.svg
		case 71:
			return generateIcon(bootstrapFill, height, width);
		// bootstrap-reboot.svg
		case 72:
			return generateIcon(bootstrapReboot, height, width);
		// bootstrap.svg
		case 73:
			return generateIcon(bootstrap, height, width);
		// bounding-box-circles.svg
		case 74:
			return generateIcon(boundingBoxCircles, height, width);
		// bounding-box.svg
		case 75:
			return generateIcon(boundingBox, height, width);
		// box-arrow-down-left.svg
		case 76:
			return generateIcon(boxArrowDownLeft, height, width);
		// box-arrow-down-right.svg
		case 77:
			return generateIcon(boxArrowDownRight, height, width);
		// box-arrow-down.svg
		case 78:
			return generateIcon(boxArrowDown, height, width);
		// box-arrow-in-down-left.svg
		case 79:
			return generateIcon(boxArrowInDownLeft, height, width);
		// box-arrow-in-down-right.svg
		case 80:
			return generateIcon(boxArrowInDownRight, height, width);
		// box-arrow-in-down.svg
		case 81:
			return generateIcon(boxArrowInDown, height, width);
		// box-arrow-in-left.svg
		case 82:
			return generateIcon(boxArrowInLeft, height, width);
		// box-arrow-in-right.svg
		case 83:
			return generateIcon(boxArrowInRight, height, width);
		// box-arrow-in-up-left.svg
		case 84:
			return generateIcon(boxArrowInUpLeft, height, width);
		// box-arrow-in-up-right.svg
		case 85:
			return generateIcon(boxArrowInUpRight, height, width);
		// box-arrow-in-up.svg
		case 86:
			return generateIcon(boxArrowInUp, height, width);
		// box-arrow-left.svg
		case 87:
			return generateIcon(boxArrowLeft, height, width);
		// box-arrow-right.svg
		case 88:
			return generateIcon(boxArrowRight, height, width);
		// box-arrow-up-left.svg
		case 89:
			return generateIcon(boxArrowUpLeft, height, width);
		// box-arrow-up-right.svg
		case 90:
			return generateIcon(boxArrowUpRight, height, width);
		// box-arrow-up.svg
		case 91:
			return generateIcon(boxArrowUp, height, width);
		// braces.svg
		case 92:
			return generateIcon(braces, height, width);
		// briefcase-fill.svg
		case 93:
			return generateIcon(briefcaseFill, height, width);
		// briefcase.svg
		case 94:
			return generateIcon(briefcase, height, width);
		// brightness-alt-high-fill.svg
		case 95:
			return generateIcon(brightnessAltHighFill, height, width);
		// brightness-alt-high.svg
		case 96:
			return generateIcon(brightnessAltHigh, height, width);
		// brightness-alt-low-fill.svg
		case 97:
			return generateIcon(brightnessAltLowFill, height, width);
		// brightness-alt-low.svg
		case 98:
			return generateIcon(brightnessAltLow, height, width);
		// brightness-high-fill.svg
		case 99:
			return generateIcon(brightnessHighFill, height, width);
		// brightness-high.svg
		case 100:
			return generateIcon(brightnessHigh, height, width);
		// brightness-low-fill.svg
		case 101:
			return generateIcon(brightnessLowFill, height, width);
		// brightness-low.svg
		case 102:
			return generateIcon(brightnessLow, height, width);
		// brush.svg
		case 103:
			return generateIcon(brush, height, width);
		// bucket-fill.svg
		case 104:
			return generateIcon(bucketFill, height, width);
		// bucket.svg
		case 105:
			return generateIcon(bucket, height, width);
		// building.svg
		case 106:
			return generateIcon(building, height, width);
		// bullseye.svg
		case 107:
			return generateIcon(bullseye, height, width);
		// calendar-fill.svg
		case 108:
			return generateIcon(calendarFill, height, width);
		// calendar.svg
		case 109:
			return generateIcon(calendar, height, width);
		// camera-video-fill.svg
		case 110:
			return generateIcon(cameraVideoFill, height, width);
		// camera-video.svg
		case 111:
			return generateIcon(cameraVideo, height, width);
		// camera.svg
		case 112:
			return generateIcon(camera, height, width);
		// capslock-fill.svg
		case 113:
			return generateIcon(capslockFill, height, width);
		// capslock.svg
		case 114:
			return generateIcon(capslock, height, width);
		// card-checklist.svg
		case 115:
			return generateIcon(cardChecklist, height, width);
		// card-heading.svg
		case 116:
			return generateIcon(cardHeading, height, width);
		// card-image.svg
		case 117:
			return generateIcon(cardImage, height, width);
		// card-list.svg
		case 118:
			return generateIcon(cardList, height, width);
		// card-text.svg
		case 119:
			return generateIcon(cardText, height, width);
		// caret-down-fill.svg
		case 120:
			return generateIcon(caretDownFill, height, width);
		// caret-down.svg
		case 121:
			return generateIcon(caretDown, height, width);
		// caret-left-fill.svg
		case 122:
			return generateIcon(caretLeftFill, height, width);
		// caret-left.svg
		case 123:
			return generateIcon(caretLeft, height, width);
		// caret-right-fill.svg
		case 124:
			return generateIcon(caretRightFill, height, width);
		// caret-right.svg
		case 125:
			return generateIcon(caretRight, height, width);
		// caret-up-fill.svg
		case 126:
			return generateIcon(caretUpFill, height, width);
		// caret-up.svg
		case 127:
			return generateIcon(caretUp, height, width);
		// chat-dots-fill.svg
		case 128:
			return generateIcon(chatDotsFill, height, width);
		// chat-dots.svg
		case 129:
			return generateIcon(chatDots, height, width);
		// chat-fill.svg
		case 130:
			return generateIcon(chatFill, height, width);
		// chat-quote-fill.svg
		case 131:
			return generateIcon(chatQuoteFill, height, width);
		// chat-quote.svg
		case 132:
			return generateIcon(chatQuote, height, width);
		// chat-square-dots-fill.svg
		case 133:
			return generateIcon(chatSquareDotsFill, height, width);
		// chat-square-dots.svg
		case 134:
			return generateIcon(chatSquareDots, height, width);
		// chat-square-fill.svg
		case 135:
			return generateIcon(chatSquareFill, height, width);
		// chat-square-quote-fill.svg
		case 136:
			return generateIcon(chatSquareQuoteFill, height, width);
		// chat-square-quote.svg
		case 137:
			return generateIcon(chatSquareQuote, height, width);
		// chat-square.svg
		case 138:
			return generateIcon(chatSquare, height, width);
		// chat.svg
		case 139:
			return generateIcon(chat, height, width);
		// check-all.svg
		case 140:
			return generateIcon(checkAll, height, width);
		// check-box.svg
		case 141:
			return generateIcon(checkBox, height, width);
		// check-circle.svg
		case 142:
			return generateIcon(checkCircle, height, width);
		// check.svg
		case 143:
			return generateIcon(check, height, width);
		// chevron-bar-contract.svg
		case 144:
			return generateIcon(chevronBarContract, height, width);
		// chevron-bar-down.svg
		case 145:
			return generateIcon(chevronBarDown, height, width);
		// chevron-bar-expand.svg
		case 146:
			return generateIcon(chevronBarExpand, height, width);
		// chevron-bar-left.svg
		case 147:
			return generateIcon(chevronBarLeft, height, width);
		// chevron-bar-right.svg
		case 148:
			return generateIcon(chevronBarRight, height, width);
		// chevron-bar-up.svg
		case 149:
			return generateIcon(chevronBarUp, height, width);
		// chevron-compact-down.svg
		case 150:
			return generateIcon(chevronCompactDown, height, width);
		// chevron-compact-left.svg
		case 151:
			return generateIcon(chevronCompactLeft, height, width);
		// chevron-compact-right.svg
		case 152:
			return generateIcon(chevronCompactRight, height, width);
		// chevron-compact-up.svg
		case 153:
			return generateIcon(chevronCompactUp, height, width);
		// chevron-contract.svg
		case 154:
			return generateIcon(chevronContract, height, width);
		// chevron-double-down.svg
		case 155:
			return generateIcon(chevronDoubleDown, height, width);
		// chevron-double-left.svg
		case 156:
			return generateIcon(chevronDoubleLeft, height, width);
		// chevron-double-right.svg
		case 157:
			return generateIcon(chevronDoubleRight, height, width);
		// chevron-double-up.svg
		case 158:
			return generateIcon(chevronDoubleUp, height, width);
		// chevron-down.svg
		case 159:
			return generateIcon(chevronDown, height, width);
		// chevron-expand.svg
		case 160:
			return generateIcon(chevronExpand, height, width);
		// chevron-left.svg
		case 161:
			return generateIcon(chevronLeft, height, width);
		// chevron-right.svg
		case 162:
			return generateIcon(chevronRight, height, width);
		// chevron-up.svg
		case 163:
			return generateIcon(chevronUp, height, width);
		// circle-fill.svg
		case 164:
			return generateIcon(circleFill, height, width);
		// circle-half.svg
		case 165:
			return generateIcon(circleHalf, height, width);
		// circle-square.svg
		case 166:
			return generateIcon(circleSquare, height, width);
		// circle.svg
		case 167:
			return generateIcon(circle, height, width);
		// clipboard-data.svg
		case 168:
			return generateIcon(clipboardData, height, width);
		// clipboard.svg
		case 169:
			return generateIcon(clipboard, height, width);
		// clock-fill.svg
		case 170:
			return generateIcon(clockFill, height, width);
		// clock-history.svg
		case 171:
			return generateIcon(clockHistory, height, width);
		// clock.svg
		case 172:
			return generateIcon(clock, height, width);
		// cloud-download.svg
		case 173:
			return generateIcon(cloudDownload, height, width);
		// cloud-fill.svg
		case 174:
			return generateIcon(cloudFill, height, width);
		// cloud-upload.svg
		case 175:
			return generateIcon(cloudUpload, height, width);
		// cloud.svg
		case 176:
			return generateIcon(cloud, height, width);
		// code-slash.svg
		case 177:
			return generateIcon(codeSlash, height, width);
		// code.svg
		case 178:
			return generateIcon(code, height, width);
		// collection-fill.svg
		case 179:
			return generateIcon(collectionFill, height, width);
		// collection-play-fill.svg
		case 180:
			return generateIcon(collectionPlayFill, height, width);
		// collection-play.svg
		case 181:
			return generateIcon(collectionPlay, height, width);
		// collection.svg
		case 182:
			return generateIcon(collection, height, width);
		// columns-gap.svg
		case 183:
			return generateIcon(columnsGap, height, width);
		// columns.svg
		case 184:
			return generateIcon(columns, height, width);
		// command.svg
		case 185:
			return generateIcon(command, height, width);
		// compass.svg
		case 186:
			return generateIcon(compass, height, width);
		// cone-striped.svg
		case 187:
			return generateIcon(coneStriped, height, width);
		// cone.svg
		case 188:
			return generateIcon(cone, height, width);
		// controller.svg
		case 189:
			return generateIcon(controller, height, width);
		// credit-card.svg
		case 190:
			return generateIcon(creditCard, height, width);
		// crop.svg
		case 191:
			return generateIcon(crop, height, width);
		// cursor-fill.svg
		case 192:
			return generateIcon(cursorFill, height, width);
		// cursor-text.svg
		case 193:
			return generateIcon(cursorText, height, width);
		// cursor.svg
		case 194:
			return generateIcon(cursor, height, width);
		// dash-circle-fill.svg
		case 195:
			return generateIcon(dashCircleFill, height, width);
		// dash-circle.svg
		case 196:
			return generateIcon(dashCircle, height, width);
		// dash-square-fill.svg
		case 197:
			return generateIcon(dashSquareFill, height, width);
		// dash-square.svg
		case 198:
			return generateIcon(dashSquare, height, width);
		// dash.svg
		case 199:
			return generateIcon(dash, height, width);
		// diamond-fill.svg
		case 200:
			return generateIcon(diamondFill, height, width);
		// diamond-half.svg
		case 201:
			return generateIcon(diamondHalf, height, width);
		// diamond.svg
		case 202:
			return generateIcon(diamond, height, width);
		// display-fill.svg
		case 203:
			return generateIcon(displayFill, height, width);
		// display.svg
		case 204:
			return generateIcon(display, height, width);
		// dot.svg
		case 205:
			return generateIcon(dot, height, width);
		// download.svg
		case 206:
			return generateIcon(download, height, width);
		// droplet-fill.svg
		case 207:
			return generateIcon(dropletFill, height, width);
		// droplet-half.svg
		case 208:
			return generateIcon(dropletHalf, height, width);
		// droplet.svg
		case 209:
			return generateIcon(droplet, height, width);
		// egg-fill.svg
		case 210:
			return generateIcon(eggFill, height, width);
		// egg-fried.svg
		case 211:
			return generateIcon(eggFried, height, width);
		// egg.svg
		case 212:
			return generateIcon(egg, height, width);
		// eject-fill.svg
		case 213:
			return generateIcon(ejectFill, height, width);
		// eject.svg
		case 214:
			return generateIcon(eject, height, width);
		// envelope-fill.svg
		case 215:
			return generateIcon(envelopeFill, height, width);
		// envelope-open-fill.svg
		case 216:
			return generateIcon(envelopeOpenFill, height, width);
		// envelope-open.svg
		case 217:
			return generateIcon(envelopeOpen, height, width);
		// envelope.svg
		case 218:
			return generateIcon(envelope, height, width);
		// exclamation-circle-fill.svg
		case 219:
			return generateIcon(exclamationCircleFill, height, width);
		// exclamation-circle.svg
		case 220:
			return generateIcon(exclamationCircle, height, width);
		// exclamation-diamond-fill.svg
		case 221:
			return generateIcon(exclamationDiamondFill, height, width);
		// exclamation-diamond.svg
		case 222:
			return generateIcon(exclamationDiamond, height, width);
		// exclamation-octagon-fill.svg
		case 223:
			return generateIcon(exclamationOctagonFill, height, width);
		// exclamation-octagon.svg
		case 224:
			return generateIcon(exclamationOctagon, height, width);
		// exclamation-square-fill.svg
		case 225:
			return generateIcon(exclamationSquareFill, height, width);
		// exclamation-square.svg
		case 226:
			return generateIcon(exclamationSquare, height, width);
		// exclamation-triangle-fill.svg
		case 227:
			return generateIcon(exclamationTriangleFill, height, width);
		// exclamation-triangle.svg
		case 228:
			return generateIcon(exclamationTriangle, height, width);
		// exclamation.svg
		case 229:
			return generateIcon(exclamation, height, width);
		// exclude.svg
		case 230:
			return generateIcon(exclude, height, width);
		// eye-fill.svg
		case 231:
			return generateIcon(eyeFill, height, width);
		// eye-slash-fill.svg
		case 232:
			return generateIcon(eyeSlashFill, height, width);
		// eye-slash.svg
		case 233:
			return generateIcon(eyeSlash, height, width);
		// eye.svg
		case 234:
			return generateIcon(eye, height, width);
		// file-arrow-down.svg
		case 235:
			return generateIcon(fileArrowDown, height, width);
		// file-arrow-up.svg
		case 236:
			return generateIcon(fileArrowUp, height, width);
		// file-break.svg
		case 237:
			return generateIcon(fileBreak, height, width);
		// file-check.svg
		case 238:
			return generateIcon(fileCheck, height, width);
		// file-code.svg
		case 239:
			return generateIcon(fileCode, height, width);
		// file-diff.svg
		case 240:
			return generateIcon(fileDiff, height, width);
		// file-earmark-arrow-down.svg
		case 241:
			return generateIcon(fileEarmarkArrowDown, height, width);
		// file-earmark-arrow-up.svg
		case 242:
			return generateIcon(fileEarmarkArrowUp, height, width);
		// file-earmark-break.svg
		case 243:
			return generateIcon(fileEarmarkBreak, height, width);
		// file-earmark-check.svg
		case 244:
			return generateIcon(fileEarmarkCheck, height, width);
		// file-earmark-code.svg
		case 245:
			return generateIcon(fileEarmarkCode, height, width);
		// file-earmark-diff.svg
		case 246:
			return generateIcon(fileEarmarkDiff, height, width);
		// file-earmark-minus.svg
		case 247:
			return generateIcon(fileEarmarkMinus, height, width);
		// file-earmark-plus.svg
		case 248:
			return generateIcon(fileEarmarkPlus, height, width);
		// file-earmark-ruled.svg
		case 249:
			return generateIcon(fileEarmarkRuled, height, width);
		// file-earmark-spreadsheet.svg
		case 250:
			return generateIcon(fileEarmarkSpreadsheet, height, width);
		// file-earmark-text.svg
		case 251:
			return generateIcon(fileEarmarkText, height, width);
		// file-earmark-zip.svg
		case 252:
			return generateIcon(fileEarmarkZip, height, width);
		// file-earmark.svg
		case 253:
			return generateIcon(fileEarmark, height, width);
		// file-minus.svg
		case 254:
			return generateIcon(fileMinus, height, width);
		// file-plus.svg
		case 255:
			return generateIcon(filePlus, height, width);
		// file-post.svg
		case 256:
			return generateIcon(filePost, height, width);
		// file-richtext.svg
		case 257:
			return generateIcon(fileRichtext, height, width);
		// file-ruled.svg
		case 258:
			return generateIcon(fileRuled, height, width);
		// file-spreadsheet.svg
		case 259:
			return generateIcon(fileSpreadsheet, height, width);
		// file-text.svg
		case 260:
			return generateIcon(fileText, height, width);
		// file-zip.svg
		case 261:
			return generateIcon(fileZip, height, width);
		// file.svg
		case 262:
			return generateIcon(file, height, width);
		// files-alt.svg
		case 263:
			return generateIcon(filesAlt, height, width);
		// files.svg
		case 264:
			return generateIcon(files, height, width);
		// film.svg
		case 265:
			return generateIcon(film, height, width);
		// filter-left.svg
		case 266:
			return generateIcon(filterLeft, height, width);
		// filter-right.svg
		case 267:
			return generateIcon(filterRight, height, width);
		// filter.svg
		case 268:
			return generateIcon(filter, height, width);
		// flag-fill.svg
		case 269:
			return generateIcon(flagFill, height, width);
		// flag.svg
		case 270:
			return generateIcon(flag, height, width);
		// folder-check.svg
		case 271:
			return generateIcon(folderCheck, height, width);
		// folder-fill.svg
		case 272:
			return generateIcon(folderFill, height, width);
		// folder-minus.svg
		case 273:
			return generateIcon(folderMinus, height, width);
		// folder-plus.svg
		case 274:
			return generateIcon(folderPlus, height, width);
		// folder-symlink-fill.svg
		case 275:
			return generateIcon(folderSymlinkFill, height, width);
		// folder-symlink.svg
		case 276:
			return generateIcon(folderSymlink, height, width);
		// folder.svg
		case 277:
			return generateIcon(folder, height, width);
		// fonts.svg
		case 278:
			return generateIcon(fonts, height, width);
		// forward-fill.svg
		case 279:
			return generateIcon(forwardFill, height, width);
		// forward.svg
		case 280:
			return generateIcon(forward, height, width);
		// fullscreen-exit.svg
		case 281:
			return generateIcon(fullscreenExit, height, width);
		// fullscreen.svg
		case 282:
			return generateIcon(fullscreen, height, width);
		// funnel-fill.svg
		case 283:
			return generateIcon(funnelFill, height, width);
		// funnel.svg
		case 284:
			return generateIcon(funnel, height, width);
		// gear-fill.svg
		case 285:
			return generateIcon(gearFill, height, width);
		// gear-wide-connected.svg
		case 286:
			return generateIcon(gearWideConnected, height, width);
		// gear-wide.svg
		case 287:
			return generateIcon(gearWide, height, width);
		// gear.svg
		case 288:
			return generateIcon(gear, height, width);
		// gem.svg
		case 289:
			return generateIcon(gem, height, width);
		// geo-alt.svg
		case 290:
			return generateIcon(geoAlt, height, width);
		// geo.svg
		case 291:
			return generateIcon(geo, height, width);
		// gift-fill.svg
		case 292:
			return generateIcon(giftFill, height, width);
		// gift.svg
		case 293:
			return generateIcon(gift, height, width);
		// graph-down.svg
		case 294:
			return generateIcon(graphDown, height, width);
		// graph-up.svg
		case 295:
			return generateIcon(graphUp, height, width);
		// grid-1x2-fill.svg
		case 296:
			return generateIcon(grid1x2Fill, height, width);
		// grid-1x2.svg
		case 297:
			return generateIcon(grid1x2, height, width);
		// grid-3x2-gap-fill.svg
		case 298:
			return generateIcon(grid3x2GapFill, height, width);
		// grid-3x2-gap.svg
		case 299:
			return generateIcon(grid3x2Gap, height, width);
		// grid-3x2.svg
		case 300:
			return generateIcon(grid3x2, height, width);
		// grid-3x3-gap-fill.svg
		case 301:
			return generateIcon(grid3x3GapFill, height, width);
		// grid-3x3-gap.svg
		case 302:
			return generateIcon(grid3x3Gap, height, width);
		// grid-3x3.svg
		case 303:
			return generateIcon(grid3x3, height, width);
		// grid-fill.svg
		case 304:
			return generateIcon(gridFill, height, width);
		// grid.svg
		case 305:
			return generateIcon(grid, height, width);
		// hammer.svg
		case 306:
			return generateIcon(hammer, height, width);
		// hash.svg
		case 307:
			return generateIcon(hash, height, width);
		// heart-fill.svg
		case 308:
			return generateIcon(heartFill, height, width);
		// heart-half.svg
		case 309:
			return generateIcon(heartHalf, height, width);
		// heart.svg
		case 310:
			return generateIcon(heart, height, width);
		// house-door-fill.svg
		case 311:
			return generateIcon(houseDoorFill, height, width);
		// house-door.svg
		case 312:
			return generateIcon(houseDoor, height, width);
		// house-fill.svg
		case 313:
			return generateIcon(houseFill, height, width);
		// house.svg
		case 314:
			return generateIcon(house, height, width);
		// hr.svg
		case 315:
			return generateIcon(hr, height, width);
		// image-alt.svg
		case 316:
			return generateIcon(imageAlt, height, width);
		// image-fill.svg
		case 317:
			return generateIcon(imageFill, height, width);
		// image.svg
		case 318:
			return generateIcon(image, height, width);
		// images.svg
		case 319:
			return generateIcon(images, height, width);
		// inbox-fill.svg
		case 320:
			return generateIcon(inboxFill, height, width);
		// inbox.svg
		case 321:
			return generateIcon(inbox, height, width);
		// inboxes-fill.svg
		case 322:
			return generateIcon(inboxesFill, height, width);
		// inboxes.svg
		case 323:
			return generateIcon(inboxes, height, width);
		// info-circle-fill.svg
		case 324:
			return generateIcon(infoCircleFill, height, width);
		// info-circle.svg
		case 325:
			return generateIcon(infoCircle, height, width);
		// info-square-fill.svg
		case 326:
			return generateIcon(infoSquareFill, height, width);
		// info-square.svg
		case 327:
			return generateIcon(infoSquare, height, width);
		// info.svg
		case 328:
			return generateIcon(info, height, width);
		// intersect.svg
		case 329:
			return generateIcon(intersect, height, width);
		// justify-left.svg
		case 330:
			return generateIcon(justifyLeft, height, width);
		// justify-right.svg
		case 331:
			return generateIcon(justifyRight, height, width);
		// justify.svg
		case 332:
			return generateIcon(justify, height, width);
		// kanban-fill.svg
		case 333:
			return generateIcon(kanbanFill, height, width);
		// kanban.svg
		case 334:
			return generateIcon(kanban, height, width);
		// laptop.svg
		case 335:
			return generateIcon(laptop, height, width);
		// layers-fill.svg
		case 336:
			return generateIcon(layersFill, height, width);
		// layers-half.svg
		case 337:
			return generateIcon(layersHalf, height, width);
		// layers.svg
		case 338:
			return generateIcon(layers, height, width);
		// layout-sidebar-inset-reverse.svg
		case 339:
			return generateIcon(layoutSidebarInsetReverse, height, width);
		// layout-sidebar-inset.svg
		case 340:
			return generateIcon(layoutSidebarInset, height, width);
		// layout-sidebar-reverse.svg
		case 341:
			return generateIcon(layoutSidebarReverse, height, width);
		// layout-sidebar.svg
		case 342:
			return generateIcon(layoutSidebar, height, width);
		// layout-split.svg
		case 343:
			return generateIcon(layoutSplit, height, width);
		// layout-text-sidebar-reverse.svg
		case 344:
			return generateIcon(layoutTextSidebarReverse, height, width);
		// layout-text-sidebar.svg
		case 345:
			return generateIcon(layoutTextSidebar, height, width);
		// layout-text-window-reverse.svg
		case 346:
			return generateIcon(layoutTextWindowReverse, height, width);
		// layout-text-window.svg
		case 347:
			return generateIcon(layoutTextWindow, height, width);
		// layout-three-columns.svg
		case 348:
			return generateIcon(layoutThreeColumns, height, width);
		// layout-wtf.svg
		case 349:
			return generateIcon(layoutWtf, height, width);
		// life-preserver.svg
		case 350:
			return generateIcon(lifePreserver, height, width);
		// lightning-fill.svg
		case 351:
			return generateIcon(lightningFill, height, width);
		// lightning.svg
		case 352:
			return generateIcon(lightning, height, width);
		// link-45deg.svg
		case 353:
			return generateIcon(link45deg, height, width);
		// link.svg
		case 354:
			return generateIcon(link, height, width);
		// list-check.svg
		case 355:
			return generateIcon(listCheck, height, width);
		// list-nested.svg
		case 356:
			return generateIcon(listNested, height, width);
		// list-ol.svg
		case 357:
			return generateIcon(listOl, height, width);
		// list-task.svg
		case 358:
			return generateIcon(listTask, height, width);
		// list-ul.svg
		case 359:
			return generateIcon(listUl, height, width);
		// list.svg
		case 360:
			return generateIcon(list, height, width);
		// lock-fill.svg
		case 361:
			return generateIcon(lockFill, height, width);
		// lock.svg
		case 362:
			return generateIcon(lock, height, width);
		// map.svg
		case 363:
			return generateIcon(map, height, width);
		// mic-fill.svg
		case 364:
			return generateIcon(micFill, height, width);
		// mic-mute-fill.svg
		case 365:
			return generateIcon(micMuteFill, height, width);
		// mic-mute.svg
		case 366:
			return generateIcon(micMute, height, width);
		// mic.svg
		case 367:
			return generateIcon(mic, height, width);
		// moon.svg
		case 368:
			return generateIcon(moon, height, width);
		// music-note-beamed.svg
		case 369:
			return generateIcon(musicNoteBeamed, height, width);
		// music-note-list.svg
		case 370:
			return generateIcon(musicNoteList, height, width);
		// music-note.svg
		case 371:
			return generateIcon(musicNote, height, width);
		// music-player-fill.svg
		case 372:
			return generateIcon(musicPlayerFill, height, width);
		// music-player.svg
		case 373:
			return generateIcon(musicPlayer, height, width);
		// newspaper.svg
		case 374:
			return generateIcon(newspaper, height, width);
		// octagon-fill.svg
		case 375:
			return generateIcon(octagonFill, height, width);
		// octagon-half.svg
		case 376:
			return generateIcon(octagonHalf, height, width);
		// octagon.svg
		case 377:
			return generateIcon(octagon, height, width);
		// option.svg
		case 378:
			return generateIcon(option, height, width);
		// outlet.svg
		case 379:
			return generateIcon(outlet, height, width);
		// paperclip.svg
		case 380:
			return generateIcon(paperclip, height, width);
		// pause-fill.svg
		case 381:
			return generateIcon(pauseFill, height, width);
		// pause.svg
		case 382:
			return generateIcon(pause, height, width);
		// pen.svg
		case 383:
			return generateIcon(pen, height, width);
		// pencil-square.svg
		case 384:
			return generateIcon(pencilSquare, height, width);
		// pencil.svg
		case 385:
			return generateIcon(pencil, height, width);
		// pentagon-fill.svg
		case 386:
			return generateIcon(pentagonFill, height, width);
		// pentagon-half.svg
		case 387:
			return generateIcon(pentagonHalf, height, width);
		// pentagon.svg
		case 388:
			return generateIcon(pentagon, height, width);
		// people-circle.svg
		case 389:
			return generateIcon(peopleCircle, height, width);
		// people-fill.svg
		case 390:
			return generateIcon(peopleFill, height, width);
		// people.svg
		case 391:
			return generateIcon(people, height, width);
		// person-bounding-box.svg
		case 392:
			return generateIcon(personBoundingBox, height, width);
		// person-check-fill.svg
		case 393:
			return generateIcon(personCheckFill, height, width);
		// person-check.svg
		case 394:
			return generateIcon(personCheck, height, width);
		// person-dash-fill.svg
		case 395:
			return generateIcon(personDashFill, height, width);
		// person-dash.svg
		case 396:
			return generateIcon(personDash, height, width);
		// person-fill.svg
		case 397:
			return generateIcon(personFill, height, width);
		// person-lines-fill.svg
		case 398:
			return generateIcon(personLinesFill, height, width);
		// person-plus-fill.svg
		case 399:
			return generateIcon(personPlusFill, height, width);
		// person-plus.svg
		case 400:
			return generateIcon(personPlus, height, width);
		// person-square.svg
		case 401:
			return generateIcon(personSquare, height, width);
		// person.svg
		case 402:
			return generateIcon(person, height, width);
		// phone-landscape.svg
		case 403:
			return generateIcon(phoneLandscape, height, width);
		// phone.svg
		case 404:
			return generateIcon(phone, height, width);
		// pie-chart-fill.svg
		case 405:
			return generateIcon(pieChartFill, height, width);
		// pie-chart.svg
		case 406:
			return generateIcon(pieChart, height, width);
		// pip-fill.svg
		case 407:
			return generateIcon(pipFill, height, width);
		// pip.svg
		case 408:
			return generateIcon(pip, height, width);
		// play-fill.svg
		case 409:
			return generateIcon(playFill, height, width);
		// play.svg
		case 410:
			return generateIcon(play, height, width);
		// plug.svg
		case 411:
			return generateIcon(plug, height, width);
		// plus-circle-fill.svg
		case 412:
			return generateIcon(plusCircleFill, height, width);
		// plus-circle.svg
		case 413:
			return generateIcon(plusCircle, height, width);
		// plus-square-fill.svg
		case 414:
			return generateIcon(plusSquareFill, height, width);
		// plus-square.svg
		case 415:
			return generateIcon(plusSquare, height, width);
		// plus.svg
		case 416:
			return generateIcon(plus, height, width);
		// power.svg
		case 417:
			return generateIcon(power, height, width);
		// puzzle-fill.svg
		case 418:
			return generateIcon(puzzleFill, height, width);
		// puzzle.svg
		case 419:
			return generateIcon(puzzle, height, width);
		// question-circle-fill.svg
		case 420:
			return generateIcon(questionCircleFill, height, width);
		// question-circle.svg
		case 421:
			return generateIcon(questionCircle, height, width);
		// question-diamond-fill.svg
		case 422:
			return generateIcon(questionDiamondFill, height, width);
		// question-diamond.svg
		case 423:
			return generateIcon(questionDiamond, height, width);
		// question-octagon-fill.svg
		case 424:
			return generateIcon(questionOctagonFill, height, width);
		// question-octagon.svg
		case 425:
			return generateIcon(questionOctagon, height, width);
		// question-square-fill.svg
		case 426:
			return generateIcon(questionSquareFill, height, width);
		// question-square.svg
		case 427:
			return generateIcon(questionSquare, height, width);
		// question.svg
		case 428:
			return generateIcon(question, height, width);
		// reply-all-fill.svg
		case 429:
			return generateIcon(replyAllFill, height, width);
		// reply-all.svg
		case 430:
			return generateIcon(replyAll, height, width);
		// reply-fill.svg
		case 431:
			return generateIcon(replyFill, height, width);
		// reply.svg
		case 432:
			return generateIcon(reply, height, width);
		// screwdriver.svg
		case 433:
			return generateIcon(screwdriver, height, width);
		// search.svg
		case 434:
			return generateIcon(search, height, width);
		// server.svg
		case 435:
			return generateIcon(server, height, width);
		// shield-fill.svg
		case 436:
			return generateIcon(shieldFill, height, width);
		// shield-lock-fill.svg
		case 437:
			return generateIcon(shieldLockFill, height, width);
		// shield-lock.svg
		case 438:
			return generateIcon(shieldLock, height, width);
		// shield-shaded.svg
		case 439:
			return generateIcon(shieldShaded, height, width);
		// shield.svg
		case 440:
			return generateIcon(shield, height, width);
		// shift-fill.svg
		case 441:
			return generateIcon(shiftFill, height, width);
		// shift.svg
		case 442:
			return generateIcon(shift, height, width);
		// shuffle.svg
		case 443:
			return generateIcon(shuffle, height, width);
		// skip-backward-fill.svg
		case 444:
			return generateIcon(skipBackwardFill, height, width);
		// skip-backward.svg
		case 445:
			return generateIcon(skipBackward, height, width);
		// skip-end-fill.svg
		case 446:
			return generateIcon(skipEndFill, height, width);
		// skip-end.svg
		case 447:
			return generateIcon(skipEnd, height, width);
		// skip-forward-fill.svg
		case 448:
			return generateIcon(skipForwardFill, height, width);
		// skip-forward.svg
		case 449:
			return generateIcon(skipForward, height, width);
		// skip-start-fill.svg
		case 450:
			return generateIcon(skipStartFill, height, width);
		// skip-start.svg
		case 451:
			return generateIcon(skipStart, height, width);
		// slash-circle-fill.svg
		case 452:
			return generateIcon(slashCircleFill, height, width);
		// slash-circle.svg
		case 453:
			return generateIcon(slashCircle, height, width);
		// slash-square-fill.svg
		case 454:
			return generateIcon(slashSquareFill, height, width);
		// slash-square.svg
		case 455:
			return generateIcon(slashSquare, height, width);
		// slash.svg
		case 456:
			return generateIcon(slash, height, width);
		// sliders.svg
		case 457:
			return generateIcon(sliders, height, width);
		// soundwave.svg
		case 458:
			return generateIcon(soundwave, height, width);
		// speaker.svg
		case 459:
			return generateIcon(speaker, height, width);
		// square-fill.svg
		case 460:
			return generateIcon(squareFill, height, width);
		// square-half.svg
		case 461:
			return generateIcon(squareHalf, height, width);
		// square.svg
		case 462:
			return generateIcon(square, height, width);
		// star-fill.svg
		case 463:
			return generateIcon(starFill, height, width);
		// star-half.svg
		case 464:
			return generateIcon(starHalf, height, width);
		// star.svg
		case 465:
			return generateIcon(star, height, width);
		// stop-fill.svg
		case 466:
			return generateIcon(stopFill, height, width);
		// stop.svg
		case 467:
			return generateIcon(stop, height, width);
		// stopwatch-fill.svg
		case 468:
			return generateIcon(stopwatchFill, height, width);
		// stopwatch.svg
		case 469:
			return generateIcon(stopwatch, height, width);
		// subtract.svg
		case 470:
			return generateIcon(subtract, height, width);
		// sun.svg
		case 471:
			return generateIcon(sun, height, width);
		// table.svg
		case 472:
			return generateIcon(table, height, width);
		// tablet-landscape.svg
		case 473:
			return generateIcon(tabletLandscape, height, width);
		// tablet.svg
		case 474:
			return generateIcon(tablet, height, width);
		// tag-fill.svg
		case 475:
			return generateIcon(tagFill, height, width);
		// tag.svg
		case 476:
			return generateIcon(tag, height, width);
		// terminal-fill.svg
		case 477:
			return generateIcon(terminalFill, height, width);
		// terminal.svg
		case 478:
			return generateIcon(terminal, height, width);
		// text-center.svg
		case 479:
			return generateIcon(textCenter, height, width);
		// text-indent-left.svg
		case 480:
			return generateIcon(textIndentLeft, height, width);
		// text-indent-right.svg
		case 481:
			return generateIcon(textIndentRight, height, width);
		// text-left.svg
		case 482:
			return generateIcon(textLeft, height, width);
		// text-right.svg
		case 483:
			return generateIcon(textRight, height, width);
		// textarea-t.svg
		case 484:
			return generateIcon(textareaT, height, width);
		// textarea.svg
		case 485:
			return generateIcon(textarea, height, width);
		// three-dots-vertical.svg
		case 486:
			return generateIcon(threeDotsVertical, height, width);
		// three-dots.svg
		case 487:
			return generateIcon(threeDots, height, width);
		// toggle-off.svg
		case 488:
			return generateIcon(toggleOff, height, width);
		// toggle-on.svg
		case 489:
			return generateIcon(toggleOn, height, width);
		// toggles.svg
		case 490:
			return generateIcon(toggles, height, width);
		// tools.svg
		case 491:
			return generateIcon(tools, height, width);
		// trash-fill.svg
		case 492:
			return generateIcon(trashFill, height, width);
		// trash.svg
		case 493:
			return generateIcon(trash, height, width);
		// trash2-fill.svg
		case 494:
			return generateIcon(trash2Fill, height, width);
		// trash2.svg
		case 495:
			return generateIcon(trash2, height, width);
		// triangle-fill.svg
		case 496:
			return generateIcon(triangleFill, height, width);
		// triangle-half.svg
		case 497:
			return generateIcon(triangleHalf, height, width);
		// triangle.svg
		case 498:
			return generateIcon(triangle, height, width);
		// trophy.svg
		case 499:
			return generateIcon(trophy, height, width);
		// tv-fill.svg
		case 500:
			return generateIcon(tvFill, height, width);
		// tv.svg
		case 501:
			return generateIcon(tv, height, width);
		// type-bold.svg
		case 502:
			return generateIcon(typeBold, height, width);
		// type-h1.svg
		case 503:
			return generateIcon(typeH1, height, width);
		// type-h2.svg
		case 504:
			return generateIcon(typeH2, height, width);
		// type-h3.svg
		case 505:
			return generateIcon(typeH3, height, width);
		// type-italic.svg
		case 506:
			return generateIcon(typeItalic, height, width);
		// type-strikethrough.svg
		case 507:
			return generateIcon(typeStrikethrough, height, width);
		// type-underline.svg
		case 508:
			return generateIcon(typeUnderline, height, width);
		// type.svg
		case 509:
			return generateIcon(type, height, width);
		// union.svg
		case 510:
			return generateIcon(union, height, width);
		// unlock-fill.svg
		case 511:
			return generateIcon(unlockFill, height, width);
		// unlock.svg
		case 512:
			return generateIcon(unlock, height, width);
		// upload.svg
		case 513:
			return generateIcon(upload, height, width);
		// view-list.svg
		case 514:
			return generateIcon(viewList, height, width);
		// view-stacked.svg
		case 515:
			return generateIcon(viewStacked, height, width);
		// volume-down-fill.svg
		case 516:
			return generateIcon(volumeDownFill, height, width);
		// volume-down.svg
		case 517:
			return generateIcon(volumeDown, height, width);
		// volume-mute-fill.svg
		case 518:
			return generateIcon(volumeMuteFill, height, width);
		// volume-mute.svg
		case 519:
			return generateIcon(volumeMute, height, width);
		// volume-up-fill.svg
		case 520:
			return generateIcon(volumeUpFill, height, width);
		// volume-up.svg
		case 521:
			return generateIcon(volumeUp, height, width);
		// vr.svg
		case 522:
			return generateIcon(vr, height, width);
		// wallet.svg
		case 523:
			return generateIcon(wallet, height, width);
		// watch.svg
		case 524:
			return generateIcon(watch, height, width);
		// wifi.svg
		case 525:
			return generateIcon(wifi, height, width);
		// window.svg
		case 526:
			return generateIcon(window, height, width);
		// wrench.svg
		case 527:
			return generateIcon(wrench, height, width);
		// x-circle-fill.svg
		case 528:
			return generateIcon(xCircleFill, height, width);
		// x-circle.svg
		case 529:
			return generateIcon(xCircle, height, width);
		// x-diamond-fill.svg
		case 530:
			return generateIcon(xDiamondFill, height, width);
		// x-diamond.svg
		case 531:
			return generateIcon(xDiamond, height, width);
		// x-octagon-fill.svg
		case 532:
			return generateIcon(xOctagonFill, height, width);
		// x-octagon.svg
		case 533:
			return generateIcon(xOctagon, height, width);
		// x-square-fill.svg
		case 534:
			return generateIcon(xSquareFill, height, width);
		// x-square.svg
		case 535:
			return generateIcon(xSquare, height, width);
		// x.svg
		case 536:
			return generateIcon(x, height, width);
	}
}