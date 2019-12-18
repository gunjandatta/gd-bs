import generateIcon from "./generate";

// Icons to import
const alarmFill = require("bootstrap-icons/icons/alarm-fill.svg");
const alarm = require("bootstrap-icons/icons/alarm.svg");
const alertCircleFill = require("bootstrap-icons/icons/alert-circle-fill.svg");
const alertCircle = require("bootstrap-icons/icons/alert-circle.svg");
const alertOctagonFill = require("bootstrap-icons/icons/alert-octagon-fill.svg");
const alertOctagon = require("bootstrap-icons/icons/alert-octagon.svg");
const alertSquareFill = require("bootstrap-icons/icons/alert-square-fill.svg");
const alertSquare = require("bootstrap-icons/icons/alert-square.svg");
const alertTriangleFill = require("bootstrap-icons/icons/alert-triangle-fill.svg");
const alertTriangle = require("bootstrap-icons/icons/alert-triangle.svg");
const archiveFill = require("bootstrap-icons/icons/archive-fill.svg");
const archive = require("bootstrap-icons/icons/archive.svg");
const arrowBarBottom = require("bootstrap-icons/icons/arrow-bar-bottom.svg");
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
const at = require("bootstrap-icons/icons/at.svg");
const award = require("bootstrap-icons/icons/award.svg");
const backspaceFill = require("bootstrap-icons/icons/backspace-fill.svg");
const backspaceReverseFill = require("bootstrap-icons/icons/backspace-reverse-fill.svg");
const backspaceReverse = require("bootstrap-icons/icons/backspace-reverse.svg");
const backspace = require("bootstrap-icons/icons/backspace.svg");
const barChartFill = require("bootstrap-icons/icons/bar-chart-fill.svg");
const barChart = require("bootstrap-icons/icons/bar-chart.svg");
const batteryCharging = require("bootstrap-icons/icons/battery-charging.svg");
const batteryFull = require("bootstrap-icons/icons/battery-full.svg");
const battery = require("bootstrap-icons/icons/battery.svg");
const bellFill = require("bootstrap-icons/icons/bell-fill.svg");
const bell = require("bootstrap-icons/icons/bell.svg");
const blockquoteLeft = require("bootstrap-icons/icons/blockquote-left.svg");
const blockquoteRight = require("bootstrap-icons/icons/blockquote-right.svg");
const bookHalfFill = require("bootstrap-icons/icons/book-half-fill.svg");
const book = require("bootstrap-icons/icons/book.svg");
const bookmarkFill = require("bootstrap-icons/icons/bookmark-fill.svg");
const bookmark = require("bootstrap-icons/icons/bookmark.svg");
const bootstrapFill = require("bootstrap-icons/icons/bootstrap-fill.svg");
const bootstrapReboot = require("bootstrap-icons/icons/bootstrap-reboot.svg");
const bootstrap = require("bootstrap-icons/icons/bootstrap.svg");
const boxArrowBottomLeft = require("bootstrap-icons/icons/box-arrow-bottom-left.svg");
const boxArrowBottomRight = require("bootstrap-icons/icons/box-arrow-bottom-right.svg");
const boxArrowDown = require("bootstrap-icons/icons/box-arrow-down.svg");
const boxArrowLeft = require("bootstrap-icons/icons/box-arrow-left.svg");
const boxArrowRight = require("bootstrap-icons/icons/box-arrow-right.svg");
const boxArrowUpLeft = require("bootstrap-icons/icons/box-arrow-up-left.svg");
const boxArrowUpRight = require("bootstrap-icons/icons/box-arrow-up-right.svg");
const boxArrowUp = require("bootstrap-icons/icons/box-arrow-up.svg");
const braces = require("bootstrap-icons/icons/braces.svg");
const brightnessFillHigh = require("bootstrap-icons/icons/brightness-fill-high.svg");
const brightnessFillLow = require("bootstrap-icons/icons/brightness-fill-low.svg");
const brightnessHigh = require("bootstrap-icons/icons/brightness-high.svg");
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
const chatFill = require("bootstrap-icons/icons/chat-fill.svg");
const chat = require("bootstrap-icons/icons/chat.svg");
const checkBox = require("bootstrap-icons/icons/check-box.svg");
const checkCircle = require("bootstrap-icons/icons/check-circle.svg");
const check = require("bootstrap-icons/icons/check.svg");
const chevronCompactDown = require("bootstrap-icons/icons/chevron-compact-down.svg");
const chevronCompactLeft = require("bootstrap-icons/icons/chevron-compact-left.svg");
const chevronCompactRight = require("bootstrap-icons/icons/chevron-compact-right.svg");
const chevronCompactUp = require("bootstrap-icons/icons/chevron-compact-up.svg");
const chevronDown = require("bootstrap-icons/icons/chevron-down.svg");
const chevronLeft = require("bootstrap-icons/icons/chevron-left.svg");
const chevronRight = require("bootstrap-icons/icons/chevron-right.svg");
const chevronUp = require("bootstrap-icons/icons/chevron-up.svg");
const circleFill = require("bootstrap-icons/icons/circle-fill.svg");
const circleHalf = require("bootstrap-icons/icons/circle-half.svg");
const circleSlash = require("bootstrap-icons/icons/circle-slash.svg");
const circle = require("bootstrap-icons/icons/circle.svg");
const clockFill = require("bootstrap-icons/icons/clock-fill.svg");
const clock = require("bootstrap-icons/icons/clock.svg");
const cloudDownload = require("bootstrap-icons/icons/cloud-download.svg");
const cloudFill = require("bootstrap-icons/icons/cloud-fill.svg");
const cloudUpload = require("bootstrap-icons/icons/cloud-upload.svg");
const cloud = require("bootstrap-icons/icons/cloud.svg");
const codeSlash = require("bootstrap-icons/icons/code-slash.svg");
const code = require("bootstrap-icons/icons/code.svg");
const columnsGutters = require("bootstrap-icons/icons/columns-gutters.svg");
const columns = require("bootstrap-icons/icons/columns.svg");
const command = require("bootstrap-icons/icons/command.svg");
const compass = require("bootstrap-icons/icons/compass.svg");
const coneStriped = require("bootstrap-icons/icons/cone-striped.svg");
const cone = require("bootstrap-icons/icons/cone.svg");
const controller = require("bootstrap-icons/icons/controller.svg");
const creditCard = require("bootstrap-icons/icons/credit-card.svg");
const cursorFill = require("bootstrap-icons/icons/cursor-fill.svg");
const cursor = require("bootstrap-icons/icons/cursor.svg");
const dash = require("bootstrap-icons/icons/dash.svg");
const diamondHalf = require("bootstrap-icons/icons/diamond-half.svg");
const diamond = require("bootstrap-icons/icons/diamond.svg");
const displayFill = require("bootstrap-icons/icons/display-fill.svg");
const display = require("bootstrap-icons/icons/display.svg");
const documentCode = require("bootstrap-icons/icons/document-code.svg");
const documentDiff = require("bootstrap-icons/icons/document-diff.svg");
const documentRichtext = require("bootstrap-icons/icons/document-richtext.svg");
const documentSpreadsheet = require("bootstrap-icons/icons/document-spreadsheet.svg");
const documentText = require("bootstrap-icons/icons/document-text.svg");
const document = require("bootstrap-icons/icons/document.svg");
const documentsAlt = require("bootstrap-icons/icons/documents-alt.svg");
const documents = require("bootstrap-icons/icons/documents.svg");
const dot = require("bootstrap-icons/icons/dot.svg");
const download = require("bootstrap-icons/icons/download.svg");
const eggFried = require("bootstrap-icons/icons/egg-fried.svg");
const ejectFill = require("bootstrap-icons/icons/eject-fill.svg");
const eject = require("bootstrap-icons/icons/eject.svg");
const envelopeFill = require("bootstrap-icons/icons/envelope-fill.svg");
const envelopeOpenFill = require("bootstrap-icons/icons/envelope-open-fill.svg");
const envelopeOpen = require("bootstrap-icons/icons/envelope-open.svg");
const envelope = require("bootstrap-icons/icons/envelope.svg");
const eyeFill = require("bootstrap-icons/icons/eye-fill.svg");
const eyeSlashFill = require("bootstrap-icons/icons/eye-slash-fill.svg");
const eyeSlash = require("bootstrap-icons/icons/eye-slash.svg");
const eye = require("bootstrap-icons/icons/eye.svg");
const filter = require("bootstrap-icons/icons/filter.svg");
const flagFill = require("bootstrap-icons/icons/flag-fill.svg");
const flag = require("bootstrap-icons/icons/flag.svg");
const folderFill = require("bootstrap-icons/icons/folder-fill.svg");
const folderSymlinkFill = require("bootstrap-icons/icons/folder-symlink-fill.svg");
const folderSymlink = require("bootstrap-icons/icons/folder-symlink.svg");
const folder = require("bootstrap-icons/icons/folder.svg");
const fonts = require("bootstrap-icons/icons/fonts.svg");
const forwardFill = require("bootstrap-icons/icons/forward-fill.svg");
const forward = require("bootstrap-icons/icons/forward.svg");
const gearFill = require("bootstrap-icons/icons/gear-fill.svg");
const gearWideConnected = require("bootstrap-icons/icons/gear-wide-connected.svg");
const gearWide = require("bootstrap-icons/icons/gear-wide.svg");
const gear = require("bootstrap-icons/icons/gear.svg");
const geo = require("bootstrap-icons/icons/geo.svg");
const graphDown = require("bootstrap-icons/icons/graph-down.svg");
const graphUp = require("bootstrap-icons/icons/graph-up.svg");
const gridFill = require("bootstrap-icons/icons/grid-fill.svg");
const grid = require("bootstrap-icons/icons/grid.svg");
const hammer = require("bootstrap-icons/icons/hammer.svg");
const hash = require("bootstrap-icons/icons/hash.svg");
const heartFill = require("bootstrap-icons/icons/heart-fill.svg");
const heart = require("bootstrap-icons/icons/heart.svg");
const houseFill = require("bootstrap-icons/icons/house-fill.svg");
const house = require("bootstrap-icons/icons/house.svg");
const imageAlt = require("bootstrap-icons/icons/image-alt.svg");
const imageFill = require("bootstrap-icons/icons/image-fill.svg");
const image = require("bootstrap-icons/icons/image.svg");
const images = require("bootstrap-icons/icons/images.svg");
const inboxFill = require("bootstrap-icons/icons/inbox-fill.svg");
const inbox = require("bootstrap-icons/icons/inbox.svg");
const inboxesFill = require("bootstrap-icons/icons/inboxes-fill.svg");
const inboxes = require("bootstrap-icons/icons/inboxes.svg");
const infoFill = require("bootstrap-icons/icons/info-fill.svg");
const infoSquareFill = require("bootstrap-icons/icons/info-square-fill.svg");
const infoSquare = require("bootstrap-icons/icons/info-square.svg");
const info = require("bootstrap-icons/icons/info.svg");
const justifyLeft = require("bootstrap-icons/icons/justify-left.svg");
const justifyRight = require("bootstrap-icons/icons/justify-right.svg");
const justify = require("bootstrap-icons/icons/justify.svg");
const kanbanFill = require("bootstrap-icons/icons/kanban-fill.svg");
const kanban = require("bootstrap-icons/icons/kanban.svg");
const laptop = require("bootstrap-icons/icons/laptop.svg");
const layoutSidebarReverse = require("bootstrap-icons/icons/layout-sidebar-reverse.svg");
const layoutSidebar = require("bootstrap-icons/icons/layout-sidebar.svg");
const layoutSplit = require("bootstrap-icons/icons/layout-split.svg");
const listCheck = require("bootstrap-icons/icons/list-check.svg");
const listOl = require("bootstrap-icons/icons/list-ol.svg");
const listTask = require("bootstrap-icons/icons/list-task.svg");
const listUl = require("bootstrap-icons/icons/list-ul.svg");
const list = require("bootstrap-icons/icons/list.svg");
const lockFill = require("bootstrap-icons/icons/lock-fill.svg");
const lock = require("bootstrap-icons/icons/lock.svg");
const map = require("bootstrap-icons/icons/map.svg");
const mic = require("bootstrap-icons/icons/mic.svg");
const moon = require("bootstrap-icons/icons/moon.svg");
const musicPlayerFill = require("bootstrap-icons/icons/music-player-fill.svg");
const musicPlayer = require("bootstrap-icons/icons/music-player.svg");
const option = require("bootstrap-icons/icons/option.svg");
const outlet = require("bootstrap-icons/icons/outlet.svg");
const pauseFill = require("bootstrap-icons/icons/pause-fill.svg");
const pause = require("bootstrap-icons/icons/pause.svg");
const pen = require("bootstrap-icons/icons/pen.svg");
const pencil = require("bootstrap-icons/icons/pencil.svg");
const peopleFill = require("bootstrap-icons/icons/people-fill.svg");
const people = require("bootstrap-icons/icons/people.svg");
const personFill = require("bootstrap-icons/icons/person-fill.svg");
const person = require("bootstrap-icons/icons/person.svg");
const phoneLandscape = require("bootstrap-icons/icons/phone-landscape.svg");
const phone = require("bootstrap-icons/icons/phone.svg");
const pieChartFill = require("bootstrap-icons/icons/pie-chart-fill.svg");
const pieChart = require("bootstrap-icons/icons/pie-chart.svg");
const playFill = require("bootstrap-icons/icons/play-fill.svg");
const play = require("bootstrap-icons/icons/play.svg");
const plug = require("bootstrap-icons/icons/plug.svg");
const plus = require("bootstrap-icons/icons/plus.svg");
const power = require("bootstrap-icons/icons/power.svg");
const questionFill = require("bootstrap-icons/icons/question-fill.svg");
const questionSquareFill = require("bootstrap-icons/icons/question-square-fill.svg");
const questionSquare = require("bootstrap-icons/icons/question-square.svg");
const question = require("bootstrap-icons/icons/question.svg");
const replyAllFill = require("bootstrap-icons/icons/reply-all-fill.svg");
const replyAll = require("bootstrap-icons/icons/reply-all.svg");
const replyFill = require("bootstrap-icons/icons/reply-fill.svg");
const reply = require("bootstrap-icons/icons/reply.svg");
const screwdriver = require("bootstrap-icons/icons/screwdriver.svg");
const search = require("bootstrap-icons/icons/search.svg");
const shieldFill = require("bootstrap-icons/icons/shield-fill.svg");
const shieldLockFill = require("bootstrap-icons/icons/shield-lock-fill.svg");
const shieldLock = require("bootstrap-icons/icons/shield-lock.svg");
const shieldShaded = require("bootstrap-icons/icons/shield-shaded.svg");
const shield = require("bootstrap-icons/icons/shield.svg");
const shiftFill = require("bootstrap-icons/icons/shift-fill.svg");
const shift = require("bootstrap-icons/icons/shift.svg");
const skipBackwardFill = require("bootstrap-icons/icons/skip-backward-fill.svg");
const skipBackward = require("bootstrap-icons/icons/skip-backward.svg");
const skipEndFill = require("bootstrap-icons/icons/skip-end-fill.svg");
const skipEnd = require("bootstrap-icons/icons/skip-end.svg");
const skipForwardFill = require("bootstrap-icons/icons/skip-forward-fill.svg");
const skipForward = require("bootstrap-icons/icons/skip-forward.svg");
const skipStartFill = require("bootstrap-icons/icons/skip-start-fill.svg");
const skipStart = require("bootstrap-icons/icons/skip-start.svg");
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
const threeDotsVertical = require("bootstrap-icons/icons/three-dots-vertical.svg");
const threeDots = require("bootstrap-icons/icons/three-dots.svg");
const toggleOff = require("bootstrap-icons/icons/toggle-off.svg");
const toggleOn = require("bootstrap-icons/icons/toggle-on.svg");
const toggles = require("bootstrap-icons/icons/toggles.svg");
const tools = require("bootstrap-icons/icons/tools.svg");
const trashFill = require("bootstrap-icons/icons/trash-fill.svg");
const trash = require("bootstrap-icons/icons/trash.svg");
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
const unlockFill = require("bootstrap-icons/icons/unlock-fill.svg");
const unlock = require("bootstrap-icons/icons/unlock.svg");
const upload = require("bootstrap-icons/icons/upload.svg");
const volumeDownFill = require("bootstrap-icons/icons/volume-down-fill.svg");
const volumeDown = require("bootstrap-icons/icons/volume-down.svg");
const volumeMuteFill = require("bootstrap-icons/icons/volume-mute-fill.svg");
const volumeMute = require("bootstrap-icons/icons/volume-mute.svg");
const volumeUpFill = require("bootstrap-icons/icons/volume-up-fill.svg");
const volumeUp = require("bootstrap-icons/icons/volume-up.svg");
const wallet = require("bootstrap-icons/icons/wallet.svg");
const watch = require("bootstrap-icons/icons/watch.svg");
const wifi = require("bootstrap-icons/icons/wifi.svg");
const window = require("bootstrap-icons/icons/window.svg");
const wrench = require("bootstrap-icons/icons/wrench.svg");
const xCircleFill = require("bootstrap-icons/icons/x-circle-fill.svg");
const xCircle = require("bootstrap-icons/icons/x-circle.svg");
const xOctagonFill = require("bootstrap-icons/icons/x-octagon-fill.svg");
const xOctagon = require("bootstrap-icons/icons/x-octagon.svg");
const xSquareFill = require("bootstrap-icons/icons/x-square-fill.svg");
const xSquare = require("bootstrap-icons/icons/x-square.svg");
const x = require("bootstrap-icons/icons/x.svg");

// Icon components
export const AlarmFill = (height,width) => { return generateIcon(alarmFill, height, width); }
export const Alarm = (height,width) => { return generateIcon(alarm, height, width); }
export const AlertCircleFill = (height,width) => { return generateIcon(alertCircleFill, height, width); }
export const AlertCircle = (height,width) => { return generateIcon(alertCircle, height, width); }
export const AlertOctagonFill = (height,width) => { return generateIcon(alertOctagonFill, height, width); }
export const AlertOctagon = (height,width) => { return generateIcon(alertOctagon, height, width); }
export const AlertSquareFill = (height,width) => { return generateIcon(alertSquareFill, height, width); }
export const AlertSquare = (height,width) => { return generateIcon(alertSquare, height, width); }
export const AlertTriangleFill = (height,width) => { return generateIcon(alertTriangleFill, height, width); }
export const AlertTriangle = (height,width) => { return generateIcon(alertTriangle, height, width); }
export const ArchiveFill = (height,width) => { return generateIcon(archiveFill, height, width); }
export const Archive = (height,width) => { return generateIcon(archive, height, width); }
export const ArrowBarBottom = (height,width) => { return generateIcon(arrowBarBottom, height, width); }
export const ArrowBarLeft = (height,width) => { return generateIcon(arrowBarLeft, height, width); }
export const ArrowBarRight = (height,width) => { return generateIcon(arrowBarRight, height, width); }
export const ArrowBarUp = (height,width) => { return generateIcon(arrowBarUp, height, width); }
export const ArrowClockwise = (height,width) => { return generateIcon(arrowClockwise, height, width); }
export const ArrowCounterclockwise = (height,width) => { return generateIcon(arrowCounterclockwise, height, width); }
export const ArrowDownLeft = (height,width) => { return generateIcon(arrowDownLeft, height, width); }
export const ArrowDownRight = (height,width) => { return generateIcon(arrowDownRight, height, width); }
export const ArrowDownShort = (height,width) => { return generateIcon(arrowDownShort, height, width); }
export const ArrowDown = (height,width) => { return generateIcon(arrowDown, height, width); }
export const ArrowLeftRight = (height,width) => { return generateIcon(arrowLeftRight, height, width); }
export const ArrowLeftShort = (height,width) => { return generateIcon(arrowLeftShort, height, width); }
export const ArrowLeft = (height,width) => { return generateIcon(arrowLeft, height, width); }
export const ArrowRepeat = (height,width) => { return generateIcon(arrowRepeat, height, width); }
export const ArrowRightShort = (height,width) => { return generateIcon(arrowRightShort, height, width); }
export const ArrowRight = (height,width) => { return generateIcon(arrowRight, height, width); }
export const ArrowUpDown = (height,width) => { return generateIcon(arrowUpDown, height, width); }
export const ArrowUpLeft = (height,width) => { return generateIcon(arrowUpLeft, height, width); }
export const ArrowUpRight = (height,width) => { return generateIcon(arrowUpRight, height, width); }
export const ArrowUpShort = (height,width) => { return generateIcon(arrowUpShort, height, width); }
export const ArrowUp = (height,width) => { return generateIcon(arrowUp, height, width); }
export const ArrowsAngleContract = (height,width) => { return generateIcon(arrowsAngleContract, height, width); }
export const ArrowsAngleExpand = (height,width) => { return generateIcon(arrowsAngleExpand, height, width); }
export const ArrowsCollapse = (height,width) => { return generateIcon(arrowsCollapse, height, width); }
export const ArrowsExpand = (height,width) => { return generateIcon(arrowsExpand, height, width); }
export const ArrowsFullscreen = (height,width) => { return generateIcon(arrowsFullscreen, height, width); }
export const At = (height,width) => { return generateIcon(at, height, width); }
export const Award = (height,width) => { return generateIcon(award, height, width); }
export const BackspaceFill = (height,width) => { return generateIcon(backspaceFill, height, width); }
export const BackspaceReverseFill = (height,width) => { return generateIcon(backspaceReverseFill, height, width); }
export const BackspaceReverse = (height,width) => { return generateIcon(backspaceReverse, height, width); }
export const Backspace = (height,width) => { return generateIcon(backspace, height, width); }
export const BarChartFill = (height,width) => { return generateIcon(barChartFill, height, width); }
export const BarChart = (height,width) => { return generateIcon(barChart, height, width); }
export const BatteryCharging = (height,width) => { return generateIcon(batteryCharging, height, width); }
export const BatteryFull = (height,width) => { return generateIcon(batteryFull, height, width); }
export const Battery = (height,width) => { return generateIcon(battery, height, width); }
export const BellFill = (height,width) => { return generateIcon(bellFill, height, width); }
export const Bell = (height,width) => { return generateIcon(bell, height, width); }
export const BlockquoteLeft = (height,width) => { return generateIcon(blockquoteLeft, height, width); }
export const BlockquoteRight = (height,width) => { return generateIcon(blockquoteRight, height, width); }
export const BookHalfFill = (height,width) => { return generateIcon(bookHalfFill, height, width); }
export const Book = (height,width) => { return generateIcon(book, height, width); }
export const BookmarkFill = (height,width) => { return generateIcon(bookmarkFill, height, width); }
export const Bookmark = (height,width) => { return generateIcon(bookmark, height, width); }
export const BootstrapFill = (height,width) => { return generateIcon(bootstrapFill, height, width); }
export const BootstrapReboot = (height,width) => { return generateIcon(bootstrapReboot, height, width); }
export const Bootstrap = (height,width) => { return generateIcon(bootstrap, height, width); }
export const BoxArrowBottomLeft = (height,width) => { return generateIcon(boxArrowBottomLeft, height, width); }
export const BoxArrowBottomRight = (height,width) => { return generateIcon(boxArrowBottomRight, height, width); }
export const BoxArrowDown = (height,width) => { return generateIcon(boxArrowDown, height, width); }
export const BoxArrowLeft = (height,width) => { return generateIcon(boxArrowLeft, height, width); }
export const BoxArrowRight = (height,width) => { return generateIcon(boxArrowRight, height, width); }
export const BoxArrowUpLeft = (height,width) => { return generateIcon(boxArrowUpLeft, height, width); }
export const BoxArrowUpRight = (height,width) => { return generateIcon(boxArrowUpRight, height, width); }
export const BoxArrowUp = (height,width) => { return generateIcon(boxArrowUp, height, width); }
export const Braces = (height,width) => { return generateIcon(braces, height, width); }
export const BrightnessFillHigh = (height,width) => { return generateIcon(brightnessFillHigh, height, width); }
export const BrightnessFillLow = (height,width) => { return generateIcon(brightnessFillLow, height, width); }
export const BrightnessHigh = (height,width) => { return generateIcon(brightnessHigh, height, width); }
export const BrightnessLow = (height,width) => { return generateIcon(brightnessLow, height, width); }
export const Brush = (height,width) => { return generateIcon(brush, height, width); }
export const BucketFill = (height,width) => { return generateIcon(bucketFill, height, width); }
export const Bucket = (height,width) => { return generateIcon(bucket, height, width); }
export const Building = (height,width) => { return generateIcon(building, height, width); }
export const Bullseye = (height,width) => { return generateIcon(bullseye, height, width); }
export const CalendarFill = (height,width) => { return generateIcon(calendarFill, height, width); }
export const Calendar = (height,width) => { return generateIcon(calendar, height, width); }
export const CameraVideoFill = (height,width) => { return generateIcon(cameraVideoFill, height, width); }
export const CameraVideo = (height,width) => { return generateIcon(cameraVideo, height, width); }
export const Camera = (height,width) => { return generateIcon(camera, height, width); }
export const CapslockFill = (height,width) => { return generateIcon(capslockFill, height, width); }
export const Capslock = (height,width) => { return generateIcon(capslock, height, width); }
export const ChatFill = (height,width) => { return generateIcon(chatFill, height, width); }
export const Chat = (height,width) => { return generateIcon(chat, height, width); }
export const CheckBox = (height,width) => { return generateIcon(checkBox, height, width); }
export const CheckCircle = (height,width) => { return generateIcon(checkCircle, height, width); }
export const Check = (height,width) => { return generateIcon(check, height, width); }
export const ChevronCompactDown = (height,width) => { return generateIcon(chevronCompactDown, height, width); }
export const ChevronCompactLeft = (height,width) => { return generateIcon(chevronCompactLeft, height, width); }
export const ChevronCompactRight = (height,width) => { return generateIcon(chevronCompactRight, height, width); }
export const ChevronCompactUp = (height,width) => { return generateIcon(chevronCompactUp, height, width); }
export const ChevronDown = (height,width) => { return generateIcon(chevronDown, height, width); }
export const ChevronLeft = (height,width) => { return generateIcon(chevronLeft, height, width); }
export const ChevronRight = (height,width) => { return generateIcon(chevronRight, height, width); }
export const ChevronUp = (height,width) => { return generateIcon(chevronUp, height, width); }
export const CircleFill = (height,width) => { return generateIcon(circleFill, height, width); }
export const CircleHalf = (height,width) => { return generateIcon(circleHalf, height, width); }
export const CircleSlash = (height,width) => { return generateIcon(circleSlash, height, width); }
export const Circle = (height,width) => { return generateIcon(circle, height, width); }
export const ClockFill = (height,width) => { return generateIcon(clockFill, height, width); }
export const Clock = (height,width) => { return generateIcon(clock, height, width); }
export const CloudDownload = (height,width) => { return generateIcon(cloudDownload, height, width); }
export const CloudFill = (height,width) => { return generateIcon(cloudFill, height, width); }
export const CloudUpload = (height,width) => { return generateIcon(cloudUpload, height, width); }
export const Cloud = (height,width) => { return generateIcon(cloud, height, width); }
export const CodeSlash = (height,width) => { return generateIcon(codeSlash, height, width); }
export const Code = (height,width) => { return generateIcon(code, height, width); }
export const ColumnsGutters = (height,width) => { return generateIcon(columnsGutters, height, width); }
export const Columns = (height,width) => { return generateIcon(columns, height, width); }
export const Command = (height,width) => { return generateIcon(command, height, width); }
export const Compass = (height,width) => { return generateIcon(compass, height, width); }
export const ConeStriped = (height,width) => { return generateIcon(coneStriped, height, width); }
export const Cone = (height,width) => { return generateIcon(cone, height, width); }
export const Controller = (height,width) => { return generateIcon(controller, height, width); }
export const CreditCard = (height,width) => { return generateIcon(creditCard, height, width); }
export const CursorFill = (height,width) => { return generateIcon(cursorFill, height, width); }
export const Cursor = (height,width) => { return generateIcon(cursor, height, width); }
export const Dash = (height,width) => { return generateIcon(dash, height, width); }
export const DiamondHalf = (height,width) => { return generateIcon(diamondHalf, height, width); }
export const Diamond = (height,width) => { return generateIcon(diamond, height, width); }
export const DisplayFill = (height,width) => { return generateIcon(displayFill, height, width); }
export const Display = (height,width) => { return generateIcon(display, height, width); }
export const DocumentCode = (height,width) => { return generateIcon(documentCode, height, width); }
export const DocumentDiff = (height,width) => { return generateIcon(documentDiff, height, width); }
export const DocumentRichtext = (height,width) => { return generateIcon(documentRichtext, height, width); }
export const DocumentSpreadsheet = (height,width) => { return generateIcon(documentSpreadsheet, height, width); }
export const DocumentText = (height,width) => { return generateIcon(documentText, height, width); }
export const Document = (height,width) => { return generateIcon(document, height, width); }
export const DocumentsAlt = (height,width) => { return generateIcon(documentsAlt, height, width); }
export const Documents = (height,width) => { return generateIcon(documents, height, width); }
export const Dot = (height,width) => { return generateIcon(dot, height, width); }
export const Download = (height,width) => { return generateIcon(download, height, width); }
export const EggFried = (height,width) => { return generateIcon(eggFried, height, width); }
export const EjectFill = (height,width) => { return generateIcon(ejectFill, height, width); }
export const Eject = (height,width) => { return generateIcon(eject, height, width); }
export const EnvelopeFill = (height,width) => { return generateIcon(envelopeFill, height, width); }
export const EnvelopeOpenFill = (height,width) => { return generateIcon(envelopeOpenFill, height, width); }
export const EnvelopeOpen = (height,width) => { return generateIcon(envelopeOpen, height, width); }
export const Envelope = (height,width) => { return generateIcon(envelope, height, width); }
export const EyeFill = (height,width) => { return generateIcon(eyeFill, height, width); }
export const EyeSlashFill = (height,width) => { return generateIcon(eyeSlashFill, height, width); }
export const EyeSlash = (height,width) => { return generateIcon(eyeSlash, height, width); }
export const Eye = (height,width) => { return generateIcon(eye, height, width); }
export const Filter = (height,width) => { return generateIcon(filter, height, width); }
export const FlagFill = (height,width) => { return generateIcon(flagFill, height, width); }
export const Flag = (height,width) => { return generateIcon(flag, height, width); }
export const FolderFill = (height,width) => { return generateIcon(folderFill, height, width); }
export const FolderSymlinkFill = (height,width) => { return generateIcon(folderSymlinkFill, height, width); }
export const FolderSymlink = (height,width) => { return generateIcon(folderSymlink, height, width); }
export const Folder = (height,width) => { return generateIcon(folder, height, width); }
export const Fonts = (height,width) => { return generateIcon(fonts, height, width); }
export const ForwardFill = (height,width) => { return generateIcon(forwardFill, height, width); }
export const Forward = (height,width) => { return generateIcon(forward, height, width); }
export const GearFill = (height,width) => { return generateIcon(gearFill, height, width); }
export const GearWideConnected = (height,width) => { return generateIcon(gearWideConnected, height, width); }
export const GearWide = (height,width) => { return generateIcon(gearWide, height, width); }
export const Gear = (height,width) => { return generateIcon(gear, height, width); }
export const Geo = (height,width) => { return generateIcon(geo, height, width); }
export const GraphDown = (height,width) => { return generateIcon(graphDown, height, width); }
export const GraphUp = (height,width) => { return generateIcon(graphUp, height, width); }
export const GridFill = (height,width) => { return generateIcon(gridFill, height, width); }
export const Grid = (height,width) => { return generateIcon(grid, height, width); }
export const Hammer = (height,width) => { return generateIcon(hammer, height, width); }
export const Hash = (height,width) => { return generateIcon(hash, height, width); }
export const HeartFill = (height,width) => { return generateIcon(heartFill, height, width); }
export const Heart = (height,width) => { return generateIcon(heart, height, width); }
export const HouseFill = (height,width) => { return generateIcon(houseFill, height, width); }
export const House = (height,width) => { return generateIcon(house, height, width); }
export const ImageAlt = (height,width) => { return generateIcon(imageAlt, height, width); }
export const ImageFill = (height,width) => { return generateIcon(imageFill, height, width); }
export const Image = (height,width) => { return generateIcon(image, height, width); }
export const Images = (height,width) => { return generateIcon(images, height, width); }
export const InboxFill = (height,width) => { return generateIcon(inboxFill, height, width); }
export const Inbox = (height,width) => { return generateIcon(inbox, height, width); }
export const InboxesFill = (height,width) => { return generateIcon(inboxesFill, height, width); }
export const Inboxes = (height,width) => { return generateIcon(inboxes, height, width); }
export const InfoFill = (height,width) => { return generateIcon(infoFill, height, width); }
export const InfoSquareFill = (height,width) => { return generateIcon(infoSquareFill, height, width); }
export const InfoSquare = (height,width) => { return generateIcon(infoSquare, height, width); }
export const Info = (height,width) => { return generateIcon(info, height, width); }
export const JustifyLeft = (height,width) => { return generateIcon(justifyLeft, height, width); }
export const JustifyRight = (height,width) => { return generateIcon(justifyRight, height, width); }
export const Justify = (height,width) => { return generateIcon(justify, height, width); }
export const KanbanFill = (height,width) => { return generateIcon(kanbanFill, height, width); }
export const Kanban = (height,width) => { return generateIcon(kanban, height, width); }
export const Laptop = (height,width) => { return generateIcon(laptop, height, width); }
export const LayoutSidebarReverse = (height,width) => { return generateIcon(layoutSidebarReverse, height, width); }
export const LayoutSidebar = (height,width) => { return generateIcon(layoutSidebar, height, width); }
export const LayoutSplit = (height,width) => { return generateIcon(layoutSplit, height, width); }
export const ListCheck = (height,width) => { return generateIcon(listCheck, height, width); }
export const ListOl = (height,width) => { return generateIcon(listOl, height, width); }
export const ListTask = (height,width) => { return generateIcon(listTask, height, width); }
export const ListUl = (height,width) => { return generateIcon(listUl, height, width); }
export const List = (height,width) => { return generateIcon(list, height, width); }
export const LockFill = (height,width) => { return generateIcon(lockFill, height, width); }
export const Lock = (height,width) => { return generateIcon(lock, height, width); }
export const Map = (height,width) => { return generateIcon(map, height, width); }
export const Mic = (height,width) => { return generateIcon(mic, height, width); }
export const Moon = (height,width) => { return generateIcon(moon, height, width); }
export const MusicPlayerFill = (height,width) => { return generateIcon(musicPlayerFill, height, width); }
export const MusicPlayer = (height,width) => { return generateIcon(musicPlayer, height, width); }
export const Option = (height,width) => { return generateIcon(option, height, width); }
export const Outlet = (height,width) => { return generateIcon(outlet, height, width); }
export const PauseFill = (height,width) => { return generateIcon(pauseFill, height, width); }
export const Pause = (height,width) => { return generateIcon(pause, height, width); }
export const Pen = (height,width) => { return generateIcon(pen, height, width); }
export const Pencil = (height,width) => { return generateIcon(pencil, height, width); }
export const PeopleFill = (height,width) => { return generateIcon(peopleFill, height, width); }
export const People = (height,width) => { return generateIcon(people, height, width); }
export const PersonFill = (height,width) => { return generateIcon(personFill, height, width); }
export const Person = (height,width) => { return generateIcon(person, height, width); }
export const PhoneLandscape = (height,width) => { return generateIcon(phoneLandscape, height, width); }
export const Phone = (height,width) => { return generateIcon(phone, height, width); }
export const PieChartFill = (height,width) => { return generateIcon(pieChartFill, height, width); }
export const PieChart = (height,width) => { return generateIcon(pieChart, height, width); }
export const PlayFill = (height,width) => { return generateIcon(playFill, height, width); }
export const Play = (height,width) => { return generateIcon(play, height, width); }
export const Plug = (height,width) => { return generateIcon(plug, height, width); }
export const Plus = (height,width) => { return generateIcon(plus, height, width); }
export const Power = (height,width) => { return generateIcon(power, height, width); }
export const QuestionFill = (height,width) => { return generateIcon(questionFill, height, width); }
export const QuestionSquareFill = (height,width) => { return generateIcon(questionSquareFill, height, width); }
export const QuestionSquare = (height,width) => { return generateIcon(questionSquare, height, width); }
export const Question = (height,width) => { return generateIcon(question, height, width); }
export const ReplyAllFill = (height,width) => { return generateIcon(replyAllFill, height, width); }
export const ReplyAll = (height,width) => { return generateIcon(replyAll, height, width); }
export const ReplyFill = (height,width) => { return generateIcon(replyFill, height, width); }
export const Reply = (height,width) => { return generateIcon(reply, height, width); }
export const Screwdriver = (height,width) => { return generateIcon(screwdriver, height, width); }
export const Search = (height,width) => { return generateIcon(search, height, width); }
export const ShieldFill = (height,width) => { return generateIcon(shieldFill, height, width); }
export const ShieldLockFill = (height,width) => { return generateIcon(shieldLockFill, height, width); }
export const ShieldLock = (height,width) => { return generateIcon(shieldLock, height, width); }
export const ShieldShaded = (height,width) => { return generateIcon(shieldShaded, height, width); }
export const Shield = (height,width) => { return generateIcon(shield, height, width); }
export const ShiftFill = (height,width) => { return generateIcon(shiftFill, height, width); }
export const Shift = (height,width) => { return generateIcon(shift, height, width); }
export const SkipBackwardFill = (height,width) => { return generateIcon(skipBackwardFill, height, width); }
export const SkipBackward = (height,width) => { return generateIcon(skipBackward, height, width); }
export const SkipEndFill = (height,width) => { return generateIcon(skipEndFill, height, width); }
export const SkipEnd = (height,width) => { return generateIcon(skipEnd, height, width); }
export const SkipForwardFill = (height,width) => { return generateIcon(skipForwardFill, height, width); }
export const SkipForward = (height,width) => { return generateIcon(skipForward, height, width); }
export const SkipStartFill = (height,width) => { return generateIcon(skipStartFill, height, width); }
export const SkipStart = (height,width) => { return generateIcon(skipStart, height, width); }
export const Speaker = (height,width) => { return generateIcon(speaker, height, width); }
export const SquareFill = (height,width) => { return generateIcon(squareFill, height, width); }
export const SquareHalf = (height,width) => { return generateIcon(squareHalf, height, width); }
export const Square = (height,width) => { return generateIcon(square, height, width); }
export const StarFill = (height,width) => { return generateIcon(starFill, height, width); }
export const StarHalf = (height,width) => { return generateIcon(starHalf, height, width); }
export const Star = (height,width) => { return generateIcon(star, height, width); }
export const StopFill = (height,width) => { return generateIcon(stopFill, height, width); }
export const Stop = (height,width) => { return generateIcon(stop, height, width); }
export const StopwatchFill = (height,width) => { return generateIcon(stopwatchFill, height, width); }
export const Stopwatch = (height,width) => { return generateIcon(stopwatch, height, width); }
export const Sun = (height,width) => { return generateIcon(sun, height, width); }
export const Table = (height,width) => { return generateIcon(table, height, width); }
export const TabletLandscape = (height,width) => { return generateIcon(tabletLandscape, height, width); }
export const Tablet = (height,width) => { return generateIcon(tablet, height, width); }
export const TagFill = (height,width) => { return generateIcon(tagFill, height, width); }
export const Tag = (height,width) => { return generateIcon(tag, height, width); }
export const TerminalFill = (height,width) => { return generateIcon(terminalFill, height, width); }
export const Terminal = (height,width) => { return generateIcon(terminal, height, width); }
export const TextCenter = (height,width) => { return generateIcon(textCenter, height, width); }
export const TextIndentLeft = (height,width) => { return generateIcon(textIndentLeft, height, width); }
export const TextIndentRight = (height,width) => { return generateIcon(textIndentRight, height, width); }
export const TextLeft = (height,width) => { return generateIcon(textLeft, height, width); }
export const TextRight = (height,width) => { return generateIcon(textRight, height, width); }
export const ThreeDotsVertical = (height,width) => { return generateIcon(threeDotsVertical, height, width); }
export const ThreeDots = (height,width) => { return generateIcon(threeDots, height, width); }
export const ToggleOff = (height,width) => { return generateIcon(toggleOff, height, width); }
export const ToggleOn = (height,width) => { return generateIcon(toggleOn, height, width); }
export const Toggles = (height,width) => { return generateIcon(toggles, height, width); }
export const Tools = (height,width) => { return generateIcon(tools, height, width); }
export const TrashFill = (height,width) => { return generateIcon(trashFill, height, width); }
export const Trash = (height,width) => { return generateIcon(trash, height, width); }
export const TriangleFill = (height,width) => { return generateIcon(triangleFill, height, width); }
export const TriangleHalf = (height,width) => { return generateIcon(triangleHalf, height, width); }
export const Triangle = (height,width) => { return generateIcon(triangle, height, width); }
export const Trophy = (height,width) => { return generateIcon(trophy, height, width); }
export const TvFill = (height,width) => { return generateIcon(tvFill, height, width); }
export const Tv = (height,width) => { return generateIcon(tv, height, width); }
export const TypeBold = (height,width) => { return generateIcon(typeBold, height, width); }
export const TypeH1 = (height,width) => { return generateIcon(typeH1, height, width); }
export const TypeH2 = (height,width) => { return generateIcon(typeH2, height, width); }
export const TypeH3 = (height,width) => { return generateIcon(typeH3, height, width); }
export const TypeItalic = (height,width) => { return generateIcon(typeItalic, height, width); }
export const TypeStrikethrough = (height,width) => { return generateIcon(typeStrikethrough, height, width); }
export const TypeUnderline = (height,width) => { return generateIcon(typeUnderline, height, width); }
export const Type = (height,width) => { return generateIcon(type, height, width); }
export const UnlockFill = (height,width) => { return generateIcon(unlockFill, height, width); }
export const Unlock = (height,width) => { return generateIcon(unlock, height, width); }
export const Upload = (height,width) => { return generateIcon(upload, height, width); }
export const VolumeDownFill = (height,width) => { return generateIcon(volumeDownFill, height, width); }
export const VolumeDown = (height,width) => { return generateIcon(volumeDown, height, width); }
export const VolumeMuteFill = (height,width) => { return generateIcon(volumeMuteFill, height, width); }
export const VolumeMute = (height,width) => { return generateIcon(volumeMute, height, width); }
export const VolumeUpFill = (height,width) => { return generateIcon(volumeUpFill, height, width); }
export const VolumeUp = (height,width) => { return generateIcon(volumeUp, height, width); }
export const Wallet = (height,width) => { return generateIcon(wallet, height, width); }
export const Watch = (height,width) => { return generateIcon(watch, height, width); }
export const Wifi = (height,width) => { return generateIcon(wifi, height, width); }
export const Window = (height,width) => { return generateIcon(window, height, width); }
export const Wrench = (height,width) => { return generateIcon(wrench, height, width); }
export const XCircleFill = (height,width) => { return generateIcon(xCircleFill, height, width); }
export const XCircle = (height,width) => { return generateIcon(xCircle, height, width); }
export const XOctagonFill = (height,width) => { return generateIcon(xOctagonFill, height, width); }
export const XOctagon = (height,width) => { return generateIcon(xOctagon, height, width); }
export const XSquareFill = (height,width) => { return generateIcon(xSquareFill, height, width); }
export const XSquare = (height,width) => { return generateIcon(xSquare, height, width); }
export const X = (height,width) => { return generateIcon(x, height, width); }
export enum IconTypes {
	alarmFill = 1,
	alarm = 2,
	alertCircleFill = 3,
	alertCircle = 4,
	alertOctagonFill = 5,
	alertOctagon = 6,
	alertSquareFill = 7,
	alertSquare = 8,
	alertTriangleFill = 9,
	alertTriangle = 10,
	archiveFill = 11,
	archive = 12,
	arrowBarBottom = 13,
	arrowBarLeft = 14,
	arrowBarRight = 15,
	arrowBarUp = 16,
	arrowClockwise = 17,
	arrowCounterclockwise = 18,
	arrowDownLeft = 19,
	arrowDownRight = 20,
	arrowDownShort = 21,
	arrowDown = 22,
	arrowLeftRight = 23,
	arrowLeftShort = 24,
	arrowLeft = 25,
	arrowRepeat = 26,
	arrowRightShort = 27,
	arrowRight = 28,
	arrowUpDown = 29,
	arrowUpLeft = 30,
	arrowUpRight = 31,
	arrowUpShort = 32,
	arrowUp = 33,
	arrowsAngleContract = 34,
	arrowsAngleExpand = 35,
	arrowsCollapse = 36,
	arrowsExpand = 37,
	arrowsFullscreen = 38,
	at = 39,
	award = 40,
	backspaceFill = 41,
	backspaceReverseFill = 42,
	backspaceReverse = 43,
	backspace = 44,
	barChartFill = 45,
	barChart = 46,
	batteryCharging = 47,
	batteryFull = 48,
	battery = 49,
	bellFill = 50,
	bell = 51,
	blockquoteLeft = 52,
	blockquoteRight = 53,
	bookHalfFill = 54,
	book = 55,
	bookmarkFill = 56,
	bookmark = 57,
	bootstrapFill = 58,
	bootstrapReboot = 59,
	bootstrap = 60,
	boxArrowBottomLeft = 61,
	boxArrowBottomRight = 62,
	boxArrowDown = 63,
	boxArrowLeft = 64,
	boxArrowRight = 65,
	boxArrowUpLeft = 66,
	boxArrowUpRight = 67,
	boxArrowUp = 68,
	braces = 69,
	brightnessFillHigh = 70,
	brightnessFillLow = 71,
	brightnessHigh = 72,
	brightnessLow = 73,
	brush = 74,
	bucketFill = 75,
	bucket = 76,
	building = 77,
	bullseye = 78,
	calendarFill = 79,
	calendar = 80,
	cameraVideoFill = 81,
	cameraVideo = 82,
	camera = 83,
	capslockFill = 84,
	capslock = 85,
	chatFill = 86,
	chat = 87,
	checkBox = 88,
	checkCircle = 89,
	check = 90,
	chevronCompactDown = 91,
	chevronCompactLeft = 92,
	chevronCompactRight = 93,
	chevronCompactUp = 94,
	chevronDown = 95,
	chevronLeft = 96,
	chevronRight = 97,
	chevronUp = 98,
	circleFill = 99,
	circleHalf = 100,
	circleSlash = 101,
	circle = 102,
	clockFill = 103,
	clock = 104,
	cloudDownload = 105,
	cloudFill = 106,
	cloudUpload = 107,
	cloud = 108,
	codeSlash = 109,
	code = 110,
	columnsGutters = 111,
	columns = 112,
	command = 113,
	compass = 114,
	coneStriped = 115,
	cone = 116,
	controller = 117,
	creditCard = 118,
	cursorFill = 119,
	cursor = 120,
	dash = 121,
	diamondHalf = 122,
	diamond = 123,
	displayFill = 124,
	display = 125,
	documentCode = 126,
	documentDiff = 127,
	documentRichtext = 128,
	documentSpreadsheet = 129,
	documentText = 130,
	document = 131,
	documentsAlt = 132,
	documents = 133,
	dot = 134,
	download = 135,
	eggFried = 136,
	ejectFill = 137,
	eject = 138,
	envelopeFill = 139,
	envelopeOpenFill = 140,
	envelopeOpen = 141,
	envelope = 142,
	eyeFill = 143,
	eyeSlashFill = 144,
	eyeSlash = 145,
	eye = 146,
	filter = 147,
	flagFill = 148,
	flag = 149,
	folderFill = 150,
	folderSymlinkFill = 151,
	folderSymlink = 152,
	folder = 153,
	fonts = 154,
	forwardFill = 155,
	forward = 156,
	gearFill = 157,
	gearWideConnected = 158,
	gearWide = 159,
	gear = 160,
	geo = 161,
	graphDown = 162,
	graphUp = 163,
	gridFill = 164,
	grid = 165,
	hammer = 166,
	hash = 167,
	heartFill = 168,
	heart = 169,
	houseFill = 170,
	house = 171,
	imageAlt = 172,
	imageFill = 173,
	image = 174,
	images = 175,
	inboxFill = 176,
	inbox = 177,
	inboxesFill = 178,
	inboxes = 179,
	infoFill = 180,
	infoSquareFill = 181,
	infoSquare = 182,
	info = 183,
	justifyLeft = 184,
	justifyRight = 185,
	justify = 186,
	kanbanFill = 187,
	kanban = 188,
	laptop = 189,
	layoutSidebarReverse = 190,
	layoutSidebar = 191,
	layoutSplit = 192,
	listCheck = 193,
	listOl = 194,
	listTask = 195,
	listUl = 196,
	list = 197,
	lockFill = 198,
	lock = 199,
	map = 200,
	mic = 201,
	moon = 202,
	musicPlayerFill = 203,
	musicPlayer = 204,
	option = 205,
	outlet = 206,
	pauseFill = 207,
	pause = 208,
	pen = 209,
	pencil = 210,
	peopleFill = 211,
	people = 212,
	personFill = 213,
	person = 214,
	phoneLandscape = 215,
	phone = 216,
	pieChartFill = 217,
	pieChart = 218,
	playFill = 219,
	play = 220,
	plug = 221,
	plus = 222,
	power = 223,
	questionFill = 224,
	questionSquareFill = 225,
	questionSquare = 226,
	question = 227,
	replyAllFill = 228,
	replyAll = 229,
	replyFill = 230,
	reply = 231,
	screwdriver = 232,
	search = 233,
	shieldFill = 234,
	shieldLockFill = 235,
	shieldLock = 236,
	shieldShaded = 237,
	shield = 238,
	shiftFill = 239,
	shift = 240,
	skipBackwardFill = 241,
	skipBackward = 242,
	skipEndFill = 243,
	skipEnd = 244,
	skipForwardFill = 245,
	skipForward = 246,
	skipStartFill = 247,
	skipStart = 248,
	speaker = 249,
	squareFill = 250,
	squareHalf = 251,
	square = 252,
	starFill = 253,
	starHalf = 254,
	star = 255,
	stopFill = 256,
	stop = 257,
	stopwatchFill = 258,
	stopwatch = 259,
	sun = 260,
	table = 261,
	tabletLandscape = 262,
	tablet = 263,
	tagFill = 264,
	tag = 265,
	terminalFill = 266,
	terminal = 267,
	textCenter = 268,
	textIndentLeft = 269,
	textIndentRight = 270,
	textLeft = 271,
	textRight = 272,
	threeDotsVertical = 273,
	threeDots = 274,
	toggleOff = 275,
	toggleOn = 276,
	toggles = 277,
	tools = 278,
	trashFill = 279,
	trash = 280,
	triangleFill = 281,
	triangleHalf = 282,
	triangle = 283,
	trophy = 284,
	tvFill = 285,
	tv = 286,
	typeBold = 287,
	typeH1 = 288,
	typeH2 = 289,
	typeH3 = 290,
	typeItalic = 291,
	typeStrikethrough = 292,
	typeUnderline = 293,
	type = 294,
	unlockFill = 295,
	unlock = 296,
	upload = 297,
	volumeDownFill = 298,
	volumeDown = 299,
	volumeMuteFill = 300,
	volumeMute = 301,
	volumeUpFill = 302,
	volumeUp = 303,
	wallet = 304,
	watch = 305,
	wifi = 306,
	window = 307,
	wrench = 308,
	xCircleFill = 309,
	xCircle = 310,
	xOctagonFill = 311,
	xOctagon = 312,
	xSquareFill = 313,
	xSquare = 314,
	x = 315
}
export const byType = (iconType:number, height?:number, width?:number) => {
	// Render by the icon type
	switch(iconType) {
	// alarm-fill.svg
	case 1:
		return AlarmFill(height, width);
	break;
	// alarm.svg
	case 2:
		return Alarm(height, width);
	break;
	// alert-circle-fill.svg
	case 3:
		return AlertCircleFill(height, width);
	break;
	// alert-circle.svg
	case 4:
		return AlertCircle(height, width);
	break;
	// alert-octagon-fill.svg
	case 5:
		return AlertOctagonFill(height, width);
	break;
	// alert-octagon.svg
	case 6:
		return AlertOctagon(height, width);
	break;
	// alert-square-fill.svg
	case 7:
		return AlertSquareFill(height, width);
	break;
	// alert-square.svg
	case 8:
		return AlertSquare(height, width);
	break;
	// alert-triangle-fill.svg
	case 9:
		return AlertTriangleFill(height, width);
	break;
	// alert-triangle.svg
	case 10:
		return AlertTriangle(height, width);
	break;
	// archive-fill.svg
	case 11:
		return ArchiveFill(height, width);
	break;
	// archive.svg
	case 12:
		return Archive(height, width);
	break;
	// arrow-bar-bottom.svg
	case 13:
		return ArrowBarBottom(height, width);
	break;
	// arrow-bar-left.svg
	case 14:
		return ArrowBarLeft(height, width);
	break;
	// arrow-bar-right.svg
	case 15:
		return ArrowBarRight(height, width);
	break;
	// arrow-bar-up.svg
	case 16:
		return ArrowBarUp(height, width);
	break;
	// arrow-clockwise.svg
	case 17:
		return ArrowClockwise(height, width);
	break;
	// arrow-counterclockwise.svg
	case 18:
		return ArrowCounterclockwise(height, width);
	break;
	// arrow-down-left.svg
	case 19:
		return ArrowDownLeft(height, width);
	break;
	// arrow-down-right.svg
	case 20:
		return ArrowDownRight(height, width);
	break;
	// arrow-down-short.svg
	case 21:
		return ArrowDownShort(height, width);
	break;
	// arrow-down.svg
	case 22:
		return ArrowDown(height, width);
	break;
	// arrow-left-right.svg
	case 23:
		return ArrowLeftRight(height, width);
	break;
	// arrow-left-short.svg
	case 24:
		return ArrowLeftShort(height, width);
	break;
	// arrow-left.svg
	case 25:
		return ArrowLeft(height, width);
	break;
	// arrow-repeat.svg
	case 26:
		return ArrowRepeat(height, width);
	break;
	// arrow-right-short.svg
	case 27:
		return ArrowRightShort(height, width);
	break;
	// arrow-right.svg
	case 28:
		return ArrowRight(height, width);
	break;
	// arrow-up-down.svg
	case 29:
		return ArrowUpDown(height, width);
	break;
	// arrow-up-left.svg
	case 30:
		return ArrowUpLeft(height, width);
	break;
	// arrow-up-right.svg
	case 31:
		return ArrowUpRight(height, width);
	break;
	// arrow-up-short.svg
	case 32:
		return ArrowUpShort(height, width);
	break;
	// arrow-up.svg
	case 33:
		return ArrowUp(height, width);
	break;
	// arrows-angle-contract.svg
	case 34:
		return ArrowsAngleContract(height, width);
	break;
	// arrows-angle-expand.svg
	case 35:
		return ArrowsAngleExpand(height, width);
	break;
	// arrows-collapse.svg
	case 36:
		return ArrowsCollapse(height, width);
	break;
	// arrows-expand.svg
	case 37:
		return ArrowsExpand(height, width);
	break;
	// arrows-fullscreen.svg
	case 38:
		return ArrowsFullscreen(height, width);
	break;
	// at.svg
	case 39:
		return At(height, width);
	break;
	// award.svg
	case 40:
		return Award(height, width);
	break;
	// backspace-fill.svg
	case 41:
		return BackspaceFill(height, width);
	break;
	// backspace-reverse-fill.svg
	case 42:
		return BackspaceReverseFill(height, width);
	break;
	// backspace-reverse.svg
	case 43:
		return BackspaceReverse(height, width);
	break;
	// backspace.svg
	case 44:
		return Backspace(height, width);
	break;
	// bar-chart-fill.svg
	case 45:
		return BarChartFill(height, width);
	break;
	// bar-chart.svg
	case 46:
		return BarChart(height, width);
	break;
	// battery-charging.svg
	case 47:
		return BatteryCharging(height, width);
	break;
	// battery-full.svg
	case 48:
		return BatteryFull(height, width);
	break;
	// battery.svg
	case 49:
		return Battery(height, width);
	break;
	// bell-fill.svg
	case 50:
		return BellFill(height, width);
	break;
	// bell.svg
	case 51:
		return Bell(height, width);
	break;
	// blockquote-left.svg
	case 52:
		return BlockquoteLeft(height, width);
	break;
	// blockquote-right.svg
	case 53:
		return BlockquoteRight(height, width);
	break;
	// book-half-fill.svg
	case 54:
		return BookHalfFill(height, width);
	break;
	// book.svg
	case 55:
		return Book(height, width);
	break;
	// bookmark-fill.svg
	case 56:
		return BookmarkFill(height, width);
	break;
	// bookmark.svg
	case 57:
		return Bookmark(height, width);
	break;
	// bootstrap-fill.svg
	case 58:
		return BootstrapFill(height, width);
	break;
	// bootstrap-reboot.svg
	case 59:
		return BootstrapReboot(height, width);
	break;
	// bootstrap.svg
	case 60:
		return Bootstrap(height, width);
	break;
	// box-arrow-bottom-left.svg
	case 61:
		return BoxArrowBottomLeft(height, width);
	break;
	// box-arrow-bottom-right.svg
	case 62:
		return BoxArrowBottomRight(height, width);
	break;
	// box-arrow-down.svg
	case 63:
		return BoxArrowDown(height, width);
	break;
	// box-arrow-left.svg
	case 64:
		return BoxArrowLeft(height, width);
	break;
	// box-arrow-right.svg
	case 65:
		return BoxArrowRight(height, width);
	break;
	// box-arrow-up-left.svg
	case 66:
		return BoxArrowUpLeft(height, width);
	break;
	// box-arrow-up-right.svg
	case 67:
		return BoxArrowUpRight(height, width);
	break;
	// box-arrow-up.svg
	case 68:
		return BoxArrowUp(height, width);
	break;
	// braces.svg
	case 69:
		return Braces(height, width);
	break;
	// brightness-fill-high.svg
	case 70:
		return BrightnessFillHigh(height, width);
	break;
	// brightness-fill-low.svg
	case 71:
		return BrightnessFillLow(height, width);
	break;
	// brightness-high.svg
	case 72:
		return BrightnessHigh(height, width);
	break;
	// brightness-low.svg
	case 73:
		return BrightnessLow(height, width);
	break;
	// brush.svg
	case 74:
		return Brush(height, width);
	break;
	// bucket-fill.svg
	case 75:
		return BucketFill(height, width);
	break;
	// bucket.svg
	case 76:
		return Bucket(height, width);
	break;
	// building.svg
	case 77:
		return Building(height, width);
	break;
	// bullseye.svg
	case 78:
		return Bullseye(height, width);
	break;
	// calendar-fill.svg
	case 79:
		return CalendarFill(height, width);
	break;
	// calendar.svg
	case 80:
		return Calendar(height, width);
	break;
	// camera-video-fill.svg
	case 81:
		return CameraVideoFill(height, width);
	break;
	// camera-video.svg
	case 82:
		return CameraVideo(height, width);
	break;
	// camera.svg
	case 83:
		return Camera(height, width);
	break;
	// capslock-fill.svg
	case 84:
		return CapslockFill(height, width);
	break;
	// capslock.svg
	case 85:
		return Capslock(height, width);
	break;
	// chat-fill.svg
	case 86:
		return ChatFill(height, width);
	break;
	// chat.svg
	case 87:
		return Chat(height, width);
	break;
	// check-box.svg
	case 88:
		return CheckBox(height, width);
	break;
	// check-circle.svg
	case 89:
		return CheckCircle(height, width);
	break;
	// check.svg
	case 90:
		return Check(height, width);
	break;
	// chevron-compact-down.svg
	case 91:
		return ChevronCompactDown(height, width);
	break;
	// chevron-compact-left.svg
	case 92:
		return ChevronCompactLeft(height, width);
	break;
	// chevron-compact-right.svg
	case 93:
		return ChevronCompactRight(height, width);
	break;
	// chevron-compact-up.svg
	case 94:
		return ChevronCompactUp(height, width);
	break;
	// chevron-down.svg
	case 95:
		return ChevronDown(height, width);
	break;
	// chevron-left.svg
	case 96:
		return ChevronLeft(height, width);
	break;
	// chevron-right.svg
	case 97:
		return ChevronRight(height, width);
	break;
	// chevron-up.svg
	case 98:
		return ChevronUp(height, width);
	break;
	// circle-fill.svg
	case 99:
		return CircleFill(height, width);
	break;
	// circle-half.svg
	case 100:
		return CircleHalf(height, width);
	break;
	// circle-slash.svg
	case 101:
		return CircleSlash(height, width);
	break;
	// circle.svg
	case 102:
		return Circle(height, width);
	break;
	// clock-fill.svg
	case 103:
		return ClockFill(height, width);
	break;
	// clock.svg
	case 104:
		return Clock(height, width);
	break;
	// cloud-download.svg
	case 105:
		return CloudDownload(height, width);
	break;
	// cloud-fill.svg
	case 106:
		return CloudFill(height, width);
	break;
	// cloud-upload.svg
	case 107:
		return CloudUpload(height, width);
	break;
	// cloud.svg
	case 108:
		return Cloud(height, width);
	break;
	// code-slash.svg
	case 109:
		return CodeSlash(height, width);
	break;
	// code.svg
	case 110:
		return Code(height, width);
	break;
	// columns-gutters.svg
	case 111:
		return ColumnsGutters(height, width);
	break;
	// columns.svg
	case 112:
		return Columns(height, width);
	break;
	// command.svg
	case 113:
		return Command(height, width);
	break;
	// compass.svg
	case 114:
		return Compass(height, width);
	break;
	// cone-striped.svg
	case 115:
		return ConeStriped(height, width);
	break;
	// cone.svg
	case 116:
		return Cone(height, width);
	break;
	// controller.svg
	case 117:
		return Controller(height, width);
	break;
	// credit-card.svg
	case 118:
		return CreditCard(height, width);
	break;
	// cursor-fill.svg
	case 119:
		return CursorFill(height, width);
	break;
	// cursor.svg
	case 120:
		return Cursor(height, width);
	break;
	// dash.svg
	case 121:
		return Dash(height, width);
	break;
	// diamond-half.svg
	case 122:
		return DiamondHalf(height, width);
	break;
	// diamond.svg
	case 123:
		return Diamond(height, width);
	break;
	// display-fill.svg
	case 124:
		return DisplayFill(height, width);
	break;
	// display.svg
	case 125:
		return Display(height, width);
	break;
	// document-code.svg
	case 126:
		return DocumentCode(height, width);
	break;
	// document-diff.svg
	case 127:
		return DocumentDiff(height, width);
	break;
	// document-richtext.svg
	case 128:
		return DocumentRichtext(height, width);
	break;
	// document-spreadsheet.svg
	case 129:
		return DocumentSpreadsheet(height, width);
	break;
	// document-text.svg
	case 130:
		return DocumentText(height, width);
	break;
	// document.svg
	case 131:
		return Document(height, width);
	break;
	// documents-alt.svg
	case 132:
		return DocumentsAlt(height, width);
	break;
	// documents.svg
	case 133:
		return Documents(height, width);
	break;
	// dot.svg
	case 134:
		return Dot(height, width);
	break;
	// download.svg
	case 135:
		return Download(height, width);
	break;
	// egg-fried.svg
	case 136:
		return EggFried(height, width);
	break;
	// eject-fill.svg
	case 137:
		return EjectFill(height, width);
	break;
	// eject.svg
	case 138:
		return Eject(height, width);
	break;
	// envelope-fill.svg
	case 139:
		return EnvelopeFill(height, width);
	break;
	// envelope-open-fill.svg
	case 140:
		return EnvelopeOpenFill(height, width);
	break;
	// envelope-open.svg
	case 141:
		return EnvelopeOpen(height, width);
	break;
	// envelope.svg
	case 142:
		return Envelope(height, width);
	break;
	// eye-fill.svg
	case 143:
		return EyeFill(height, width);
	break;
	// eye-slash-fill.svg
	case 144:
		return EyeSlashFill(height, width);
	break;
	// eye-slash.svg
	case 145:
		return EyeSlash(height, width);
	break;
	// eye.svg
	case 146:
		return Eye(height, width);
	break;
	// filter.svg
	case 147:
		return Filter(height, width);
	break;
	// flag-fill.svg
	case 148:
		return FlagFill(height, width);
	break;
	// flag.svg
	case 149:
		return Flag(height, width);
	break;
	// folder-fill.svg
	case 150:
		return FolderFill(height, width);
	break;
	// folder-symlink-fill.svg
	case 151:
		return FolderSymlinkFill(height, width);
	break;
	// folder-symlink.svg
	case 152:
		return FolderSymlink(height, width);
	break;
	// folder.svg
	case 153:
		return Folder(height, width);
	break;
	// fonts.svg
	case 154:
		return Fonts(height, width);
	break;
	// forward-fill.svg
	case 155:
		return ForwardFill(height, width);
	break;
	// forward.svg
	case 156:
		return Forward(height, width);
	break;
	// gear-fill.svg
	case 157:
		return GearFill(height, width);
	break;
	// gear-wide-connected.svg
	case 158:
		return GearWideConnected(height, width);
	break;
	// gear-wide.svg
	case 159:
		return GearWide(height, width);
	break;
	// gear.svg
	case 160:
		return Gear(height, width);
	break;
	// geo.svg
	case 161:
		return Geo(height, width);
	break;
	// graph-down.svg
	case 162:
		return GraphDown(height, width);
	break;
	// graph-up.svg
	case 163:
		return GraphUp(height, width);
	break;
	// grid-fill.svg
	case 164:
		return GridFill(height, width);
	break;
	// grid.svg
	case 165:
		return Grid(height, width);
	break;
	// hammer.svg
	case 166:
		return Hammer(height, width);
	break;
	// hash.svg
	case 167:
		return Hash(height, width);
	break;
	// heart-fill.svg
	case 168:
		return HeartFill(height, width);
	break;
	// heart.svg
	case 169:
		return Heart(height, width);
	break;
	// house-fill.svg
	case 170:
		return HouseFill(height, width);
	break;
	// house.svg
	case 171:
		return House(height, width);
	break;
	// image-alt.svg
	case 172:
		return ImageAlt(height, width);
	break;
	// image-fill.svg
	case 173:
		return ImageFill(height, width);
	break;
	// image.svg
	case 174:
		return Image(height, width);
	break;
	// images.svg
	case 175:
		return Images(height, width);
	break;
	// inbox-fill.svg
	case 176:
		return InboxFill(height, width);
	break;
	// inbox.svg
	case 177:
		return Inbox(height, width);
	break;
	// inboxes-fill.svg
	case 178:
		return InboxesFill(height, width);
	break;
	// inboxes.svg
	case 179:
		return Inboxes(height, width);
	break;
	// info-fill.svg
	case 180:
		return InfoFill(height, width);
	break;
	// info-square-fill.svg
	case 181:
		return InfoSquareFill(height, width);
	break;
	// info-square.svg
	case 182:
		return InfoSquare(height, width);
	break;
	// info.svg
	case 183:
		return Info(height, width);
	break;
	// justify-left.svg
	case 184:
		return JustifyLeft(height, width);
	break;
	// justify-right.svg
	case 185:
		return JustifyRight(height, width);
	break;
	// justify.svg
	case 186:
		return Justify(height, width);
	break;
	// kanban-fill.svg
	case 187:
		return KanbanFill(height, width);
	break;
	// kanban.svg
	case 188:
		return Kanban(height, width);
	break;
	// laptop.svg
	case 189:
		return Laptop(height, width);
	break;
	// layout-sidebar-reverse.svg
	case 190:
		return LayoutSidebarReverse(height, width);
	break;
	// layout-sidebar.svg
	case 191:
		return LayoutSidebar(height, width);
	break;
	// layout-split.svg
	case 192:
		return LayoutSplit(height, width);
	break;
	// list-check.svg
	case 193:
		return ListCheck(height, width);
	break;
	// list-ol.svg
	case 194:
		return ListOl(height, width);
	break;
	// list-task.svg
	case 195:
		return ListTask(height, width);
	break;
	// list-ul.svg
	case 196:
		return ListUl(height, width);
	break;
	// list.svg
	case 197:
		return List(height, width);
	break;
	// lock-fill.svg
	case 198:
		return LockFill(height, width);
	break;
	// lock.svg
	case 199:
		return Lock(height, width);
	break;
	// map.svg
	case 200:
		return Map(height, width);
	break;
	// mic.svg
	case 201:
		return Mic(height, width);
	break;
	// moon.svg
	case 202:
		return Moon(height, width);
	break;
	// music-player-fill.svg
	case 203:
		return MusicPlayerFill(height, width);
	break;
	// music-player.svg
	case 204:
		return MusicPlayer(height, width);
	break;
	// option.svg
	case 205:
		return Option(height, width);
	break;
	// outlet.svg
	case 206:
		return Outlet(height, width);
	break;
	// pause-fill.svg
	case 207:
		return PauseFill(height, width);
	break;
	// pause.svg
	case 208:
		return Pause(height, width);
	break;
	// pen.svg
	case 209:
		return Pen(height, width);
	break;
	// pencil.svg
	case 210:
		return Pencil(height, width);
	break;
	// people-fill.svg
	case 211:
		return PeopleFill(height, width);
	break;
	// people.svg
	case 212:
		return People(height, width);
	break;
	// person-fill.svg
	case 213:
		return PersonFill(height, width);
	break;
	// person.svg
	case 214:
		return Person(height, width);
	break;
	// phone-landscape.svg
	case 215:
		return PhoneLandscape(height, width);
	break;
	// phone.svg
	case 216:
		return Phone(height, width);
	break;
	// pie-chart-fill.svg
	case 217:
		return PieChartFill(height, width);
	break;
	// pie-chart.svg
	case 218:
		return PieChart(height, width);
	break;
	// play-fill.svg
	case 219:
		return PlayFill(height, width);
	break;
	// play.svg
	case 220:
		return Play(height, width);
	break;
	// plug.svg
	case 221:
		return Plug(height, width);
	break;
	// plus.svg
	case 222:
		return Plus(height, width);
	break;
	// power.svg
	case 223:
		return Power(height, width);
	break;
	// question-fill.svg
	case 224:
		return QuestionFill(height, width);
	break;
	// question-square-fill.svg
	case 225:
		return QuestionSquareFill(height, width);
	break;
	// question-square.svg
	case 226:
		return QuestionSquare(height, width);
	break;
	// question.svg
	case 227:
		return Question(height, width);
	break;
	// reply-all-fill.svg
	case 228:
		return ReplyAllFill(height, width);
	break;
	// reply-all.svg
	case 229:
		return ReplyAll(height, width);
	break;
	// reply-fill.svg
	case 230:
		return ReplyFill(height, width);
	break;
	// reply.svg
	case 231:
		return Reply(height, width);
	break;
	// screwdriver.svg
	case 232:
		return Screwdriver(height, width);
	break;
	// search.svg
	case 233:
		return Search(height, width);
	break;
	// shield-fill.svg
	case 234:
		return ShieldFill(height, width);
	break;
	// shield-lock-fill.svg
	case 235:
		return ShieldLockFill(height, width);
	break;
	// shield-lock.svg
	case 236:
		return ShieldLock(height, width);
	break;
	// shield-shaded.svg
	case 237:
		return ShieldShaded(height, width);
	break;
	// shield.svg
	case 238:
		return Shield(height, width);
	break;
	// shift-fill.svg
	case 239:
		return ShiftFill(height, width);
	break;
	// shift.svg
	case 240:
		return Shift(height, width);
	break;
	// skip-backward-fill.svg
	case 241:
		return SkipBackwardFill(height, width);
	break;
	// skip-backward.svg
	case 242:
		return SkipBackward(height, width);
	break;
	// skip-end-fill.svg
	case 243:
		return SkipEndFill(height, width);
	break;
	// skip-end.svg
	case 244:
		return SkipEnd(height, width);
	break;
	// skip-forward-fill.svg
	case 245:
		return SkipForwardFill(height, width);
	break;
	// skip-forward.svg
	case 246:
		return SkipForward(height, width);
	break;
	// skip-start-fill.svg
	case 247:
		return SkipStartFill(height, width);
	break;
	// skip-start.svg
	case 248:
		return SkipStart(height, width);
	break;
	// speaker.svg
	case 249:
		return Speaker(height, width);
	break;
	// square-fill.svg
	case 250:
		return SquareFill(height, width);
	break;
	// square-half.svg
	case 251:
		return SquareHalf(height, width);
	break;
	// square.svg
	case 252:
		return Square(height, width);
	break;
	// star-fill.svg
	case 253:
		return StarFill(height, width);
	break;
	// star-half.svg
	case 254:
		return StarHalf(height, width);
	break;
	// star.svg
	case 255:
		return Star(height, width);
	break;
	// stop-fill.svg
	case 256:
		return StopFill(height, width);
	break;
	// stop.svg
	case 257:
		return Stop(height, width);
	break;
	// stopwatch-fill.svg
	case 258:
		return StopwatchFill(height, width);
	break;
	// stopwatch.svg
	case 259:
		return Stopwatch(height, width);
	break;
	// sun.svg
	case 260:
		return Sun(height, width);
	break;
	// table.svg
	case 261:
		return Table(height, width);
	break;
	// tablet-landscape.svg
	case 262:
		return TabletLandscape(height, width);
	break;
	// tablet.svg
	case 263:
		return Tablet(height, width);
	break;
	// tag-fill.svg
	case 264:
		return TagFill(height, width);
	break;
	// tag.svg
	case 265:
		return Tag(height, width);
	break;
	// terminal-fill.svg
	case 266:
		return TerminalFill(height, width);
	break;
	// terminal.svg
	case 267:
		return Terminal(height, width);
	break;
	// text-center.svg
	case 268:
		return TextCenter(height, width);
	break;
	// text-indent-left.svg
	case 269:
		return TextIndentLeft(height, width);
	break;
	// text-indent-right.svg
	case 270:
		return TextIndentRight(height, width);
	break;
	// text-left.svg
	case 271:
		return TextLeft(height, width);
	break;
	// text-right.svg
	case 272:
		return TextRight(height, width);
	break;
	// three-dots-vertical.svg
	case 273:
		return ThreeDotsVertical(height, width);
	break;
	// three-dots.svg
	case 274:
		return ThreeDots(height, width);
	break;
	// toggle-off.svg
	case 275:
		return ToggleOff(height, width);
	break;
	// toggle-on.svg
	case 276:
		return ToggleOn(height, width);
	break;
	// toggles.svg
	case 277:
		return Toggles(height, width);
	break;
	// tools.svg
	case 278:
		return Tools(height, width);
	break;
	// trash-fill.svg
	case 279:
		return TrashFill(height, width);
	break;
	// trash.svg
	case 280:
		return Trash(height, width);
	break;
	// triangle-fill.svg
	case 281:
		return TriangleFill(height, width);
	break;
	// triangle-half.svg
	case 282:
		return TriangleHalf(height, width);
	break;
	// triangle.svg
	case 283:
		return Triangle(height, width);
	break;
	// trophy.svg
	case 284:
		return Trophy(height, width);
	break;
	// tv-fill.svg
	case 285:
		return TvFill(height, width);
	break;
	// tv.svg
	case 286:
		return Tv(height, width);
	break;
	// type-bold.svg
	case 287:
		return TypeBold(height, width);
	break;
	// type-h1.svg
	case 288:
		return TypeH1(height, width);
	break;
	// type-h2.svg
	case 289:
		return TypeH2(height, width);
	break;
	// type-h3.svg
	case 290:
		return TypeH3(height, width);
	break;
	// type-italic.svg
	case 291:
		return TypeItalic(height, width);
	break;
	// type-strikethrough.svg
	case 292:
		return TypeStrikethrough(height, width);
	break;
	// type-underline.svg
	case 293:
		return TypeUnderline(height, width);
	break;
	// type.svg
	case 294:
		return Type(height, width);
	break;
	// unlock-fill.svg
	case 295:
		return UnlockFill(height, width);
	break;
	// unlock.svg
	case 296:
		return Unlock(height, width);
	break;
	// upload.svg
	case 297:
		return Upload(height, width);
	break;
	// volume-down-fill.svg
	case 298:
		return VolumeDownFill(height, width);
	break;
	// volume-down.svg
	case 299:
		return VolumeDown(height, width);
	break;
	// volume-mute-fill.svg
	case 300:
		return VolumeMuteFill(height, width);
	break;
	// volume-mute.svg
	case 301:
		return VolumeMute(height, width);
	break;
	// volume-up-fill.svg
	case 302:
		return VolumeUpFill(height, width);
	break;
	// volume-up.svg
	case 303:
		return VolumeUp(height, width);
	break;
	// wallet.svg
	case 304:
		return Wallet(height, width);
	break;
	// watch.svg
	case 305:
		return Watch(height, width);
	break;
	// wifi.svg
	case 306:
		return Wifi(height, width);
	break;
	// window.svg
	case 307:
		return Window(height, width);
	break;
	// wrench.svg
	case 308:
		return Wrench(height, width);
	break;
	// x-circle-fill.svg
	case 309:
		return XCircleFill(height, width);
	break;
	// x-circle.svg
	case 310:
		return XCircle(height, width);
	break;
	// x-octagon-fill.svg
	case 311:
		return XOctagonFill(height, width);
	break;
	// x-octagon.svg
	case 312:
		return XOctagon(height, width);
	break;
	// x-square-fill.svg
	case 313:
		return XSquareFill(height, width);
	break;
	// x-square.svg
	case 314:
		return XSquare(height, width);
	break;
	// x.svg
	case 315:
		return X(height, width);
	break;
	}
}