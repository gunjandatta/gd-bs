"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generate_1 = require("./generate");
// Icons to import
var alarmFill = require("bootstrap-icons/icons/alarm-fill.svg");
var alarm = require("bootstrap-icons/icons/alarm.svg");
var alt = require("bootstrap-icons/icons/alt.svg");
var appIndicator = require("bootstrap-icons/icons/app-indicator.svg");
var app = require("bootstrap-icons/icons/app.svg");
var archiveFill = require("bootstrap-icons/icons/archive-fill.svg");
var archive = require("bootstrap-icons/icons/archive.svg");
var arrow90degDown = require("bootstrap-icons/icons/arrow-90deg-down.svg");
var arrow90degLeft = require("bootstrap-icons/icons/arrow-90deg-left.svg");
var arrow90degRight = require("bootstrap-icons/icons/arrow-90deg-right.svg");
var arrow90degUp = require("bootstrap-icons/icons/arrow-90deg-up.svg");
var arrowBarDown = require("bootstrap-icons/icons/arrow-bar-down.svg");
var arrowBarLeft = require("bootstrap-icons/icons/arrow-bar-left.svg");
var arrowBarRight = require("bootstrap-icons/icons/arrow-bar-right.svg");
var arrowBarUp = require("bootstrap-icons/icons/arrow-bar-up.svg");
var arrowClockwise = require("bootstrap-icons/icons/arrow-clockwise.svg");
var arrowCounterclockwise = require("bootstrap-icons/icons/arrow-counterclockwise.svg");
var arrowDownLeft = require("bootstrap-icons/icons/arrow-down-left.svg");
var arrowDownRight = require("bootstrap-icons/icons/arrow-down-right.svg");
var arrowDownShort = require("bootstrap-icons/icons/arrow-down-short.svg");
var arrowDown = require("bootstrap-icons/icons/arrow-down.svg");
var arrowLeftRight = require("bootstrap-icons/icons/arrow-left-right.svg");
var arrowLeftShort = require("bootstrap-icons/icons/arrow-left-short.svg");
var arrowLeft = require("bootstrap-icons/icons/arrow-left.svg");
var arrowRepeat = require("bootstrap-icons/icons/arrow-repeat.svg");
var arrowReturnLeft = require("bootstrap-icons/icons/arrow-return-left.svg");
var arrowReturnRight = require("bootstrap-icons/icons/arrow-return-right.svg");
var arrowRightShort = require("bootstrap-icons/icons/arrow-right-short.svg");
var arrowRight = require("bootstrap-icons/icons/arrow-right.svg");
var arrowUpDown = require("bootstrap-icons/icons/arrow-up-down.svg");
var arrowUpLeft = require("bootstrap-icons/icons/arrow-up-left.svg");
var arrowUpRight = require("bootstrap-icons/icons/arrow-up-right.svg");
var arrowUpShort = require("bootstrap-icons/icons/arrow-up-short.svg");
var arrowUp = require("bootstrap-icons/icons/arrow-up.svg");
var arrowsAngleContract = require("bootstrap-icons/icons/arrows-angle-contract.svg");
var arrowsAngleExpand = require("bootstrap-icons/icons/arrows-angle-expand.svg");
var arrowsCollapse = require("bootstrap-icons/icons/arrows-collapse.svg");
var arrowsExpand = require("bootstrap-icons/icons/arrows-expand.svg");
var arrowsFullscreen = require("bootstrap-icons/icons/arrows-fullscreen.svg");
var arrowsMove = require("bootstrap-icons/icons/arrows-move.svg");
var aspectRatioFill = require("bootstrap-icons/icons/aspect-ratio-fill.svg");
var aspectRatio = require("bootstrap-icons/icons/aspect-ratio.svg");
var at = require("bootstrap-icons/icons/at.svg");
var awardFill = require("bootstrap-icons/icons/award-fill.svg");
var award = require("bootstrap-icons/icons/award.svg");
var backspaceFill = require("bootstrap-icons/icons/backspace-fill.svg");
var backspaceReverseFill = require("bootstrap-icons/icons/backspace-reverse-fill.svg");
var backspaceReverse = require("bootstrap-icons/icons/backspace-reverse.svg");
var backspace = require("bootstrap-icons/icons/backspace.svg");
var bagFill = require("bootstrap-icons/icons/bag-fill.svg");
var bag = require("bootstrap-icons/icons/bag.svg");
var barChartFill = require("bootstrap-icons/icons/bar-chart-fill.svg");
var barChart = require("bootstrap-icons/icons/bar-chart.svg");
var batteryCharging = require("bootstrap-icons/icons/battery-charging.svg");
var batteryFull = require("bootstrap-icons/icons/battery-full.svg");
var batteryHalf = require("bootstrap-icons/icons/battery-half.svg");
var battery = require("bootstrap-icons/icons/battery.svg");
var bellFill = require("bootstrap-icons/icons/bell-fill.svg");
var bell = require("bootstrap-icons/icons/bell.svg");
var blockquoteLeft = require("bootstrap-icons/icons/blockquote-left.svg");
var blockquoteRight = require("bootstrap-icons/icons/blockquote-right.svg");
var bookHalf = require("bootstrap-icons/icons/book-half.svg");
var book = require("bootstrap-icons/icons/book.svg");
var bookmarkCheck = require("bootstrap-icons/icons/bookmark-check.svg");
var bookmarkDash = require("bootstrap-icons/icons/bookmark-dash.svg");
var bookmarkFill = require("bootstrap-icons/icons/bookmark-fill.svg");
var bookmarkPlus = require("bootstrap-icons/icons/bookmark-plus.svg");
var bookmark = require("bootstrap-icons/icons/bookmark.svg");
var bookmarksFill = require("bootstrap-icons/icons/bookmarks-fill.svg");
var bookmarks = require("bootstrap-icons/icons/bookmarks.svg");
var bootstrapFill = require("bootstrap-icons/icons/bootstrap-fill.svg");
var bootstrapReboot = require("bootstrap-icons/icons/bootstrap-reboot.svg");
var bootstrap = require("bootstrap-icons/icons/bootstrap.svg");
var boundingBoxCircles = require("bootstrap-icons/icons/bounding-box-circles.svg");
var boundingBox = require("bootstrap-icons/icons/bounding-box.svg");
var boxArrowDownLeft = require("bootstrap-icons/icons/box-arrow-down-left.svg");
var boxArrowDownRight = require("bootstrap-icons/icons/box-arrow-down-right.svg");
var boxArrowDown = require("bootstrap-icons/icons/box-arrow-down.svg");
var boxArrowInDownLeft = require("bootstrap-icons/icons/box-arrow-in-down-left.svg");
var boxArrowInDownRight = require("bootstrap-icons/icons/box-arrow-in-down-right.svg");
var boxArrowInDown = require("bootstrap-icons/icons/box-arrow-in-down.svg");
var boxArrowInLeft = require("bootstrap-icons/icons/box-arrow-in-left.svg");
var boxArrowInRight = require("bootstrap-icons/icons/box-arrow-in-right.svg");
var boxArrowInUpLeft = require("bootstrap-icons/icons/box-arrow-in-up-left.svg");
var boxArrowInUpRight = require("bootstrap-icons/icons/box-arrow-in-up-right.svg");
var boxArrowInUp = require("bootstrap-icons/icons/box-arrow-in-up.svg");
var boxArrowLeft = require("bootstrap-icons/icons/box-arrow-left.svg");
var boxArrowRight = require("bootstrap-icons/icons/box-arrow-right.svg");
var boxArrowUpLeft = require("bootstrap-icons/icons/box-arrow-up-left.svg");
var boxArrowUpRight = require("bootstrap-icons/icons/box-arrow-up-right.svg");
var boxArrowUp = require("bootstrap-icons/icons/box-arrow-up.svg");
var braces = require("bootstrap-icons/icons/braces.svg");
var briefcaseFill = require("bootstrap-icons/icons/briefcase-fill.svg");
var briefcase = require("bootstrap-icons/icons/briefcase.svg");
var brightnessAltHighFill = require("bootstrap-icons/icons/brightness-alt-high-fill.svg");
var brightnessAltHigh = require("bootstrap-icons/icons/brightness-alt-high.svg");
var brightnessAltLowFill = require("bootstrap-icons/icons/brightness-alt-low-fill.svg");
var brightnessAltLow = require("bootstrap-icons/icons/brightness-alt-low.svg");
var brightnessHighFill = require("bootstrap-icons/icons/brightness-high-fill.svg");
var brightnessHigh = require("bootstrap-icons/icons/brightness-high.svg");
var brightnessLowFill = require("bootstrap-icons/icons/brightness-low-fill.svg");
var brightnessLow = require("bootstrap-icons/icons/brightness-low.svg");
var brush = require("bootstrap-icons/icons/brush.svg");
var bucketFill = require("bootstrap-icons/icons/bucket-fill.svg");
var bucket = require("bootstrap-icons/icons/bucket.svg");
var building = require("bootstrap-icons/icons/building.svg");
var bullseye = require("bootstrap-icons/icons/bullseye.svg");
var calendarFill = require("bootstrap-icons/icons/calendar-fill.svg");
var calendar = require("bootstrap-icons/icons/calendar.svg");
var cameraVideoFill = require("bootstrap-icons/icons/camera-video-fill.svg");
var cameraVideo = require("bootstrap-icons/icons/camera-video.svg");
var camera = require("bootstrap-icons/icons/camera.svg");
var capslockFill = require("bootstrap-icons/icons/capslock-fill.svg");
var capslock = require("bootstrap-icons/icons/capslock.svg");
var cardChecklist = require("bootstrap-icons/icons/card-checklist.svg");
var cardHeading = require("bootstrap-icons/icons/card-heading.svg");
var cardImage = require("bootstrap-icons/icons/card-image.svg");
var cardList = require("bootstrap-icons/icons/card-list.svg");
var cardText = require("bootstrap-icons/icons/card-text.svg");
var caretDownFill = require("bootstrap-icons/icons/caret-down-fill.svg");
var caretDown = require("bootstrap-icons/icons/caret-down.svg");
var caretLeftFill = require("bootstrap-icons/icons/caret-left-fill.svg");
var caretLeft = require("bootstrap-icons/icons/caret-left.svg");
var caretRightFill = require("bootstrap-icons/icons/caret-right-fill.svg");
var caretRight = require("bootstrap-icons/icons/caret-right.svg");
var caretUpFill = require("bootstrap-icons/icons/caret-up-fill.svg");
var caretUp = require("bootstrap-icons/icons/caret-up.svg");
var chatDotsFill = require("bootstrap-icons/icons/chat-dots-fill.svg");
var chatDots = require("bootstrap-icons/icons/chat-dots.svg");
var chatFill = require("bootstrap-icons/icons/chat-fill.svg");
var chatQuoteFill = require("bootstrap-icons/icons/chat-quote-fill.svg");
var chatQuote = require("bootstrap-icons/icons/chat-quote.svg");
var chatSquareDotsFill = require("bootstrap-icons/icons/chat-square-dots-fill.svg");
var chatSquareDots = require("bootstrap-icons/icons/chat-square-dots.svg");
var chatSquareFill = require("bootstrap-icons/icons/chat-square-fill.svg");
var chatSquareQuoteFill = require("bootstrap-icons/icons/chat-square-quote-fill.svg");
var chatSquareQuote = require("bootstrap-icons/icons/chat-square-quote.svg");
var chatSquare = require("bootstrap-icons/icons/chat-square.svg");
var chat = require("bootstrap-icons/icons/chat.svg");
var checkAll = require("bootstrap-icons/icons/check-all.svg");
var checkBox = require("bootstrap-icons/icons/check-box.svg");
var checkCircle = require("bootstrap-icons/icons/check-circle.svg");
var check = require("bootstrap-icons/icons/check.svg");
var chevronBarContract = require("bootstrap-icons/icons/chevron-bar-contract.svg");
var chevronBarDown = require("bootstrap-icons/icons/chevron-bar-down.svg");
var chevronBarExpand = require("bootstrap-icons/icons/chevron-bar-expand.svg");
var chevronBarLeft = require("bootstrap-icons/icons/chevron-bar-left.svg");
var chevronBarRight = require("bootstrap-icons/icons/chevron-bar-right.svg");
var chevronBarUp = require("bootstrap-icons/icons/chevron-bar-up.svg");
var chevronCompactDown = require("bootstrap-icons/icons/chevron-compact-down.svg");
var chevronCompactLeft = require("bootstrap-icons/icons/chevron-compact-left.svg");
var chevronCompactRight = require("bootstrap-icons/icons/chevron-compact-right.svg");
var chevronCompactUp = require("bootstrap-icons/icons/chevron-compact-up.svg");
var chevronContract = require("bootstrap-icons/icons/chevron-contract.svg");
var chevronDoubleDown = require("bootstrap-icons/icons/chevron-double-down.svg");
var chevronDoubleLeft = require("bootstrap-icons/icons/chevron-double-left.svg");
var chevronDoubleRight = require("bootstrap-icons/icons/chevron-double-right.svg");
var chevronDoubleUp = require("bootstrap-icons/icons/chevron-double-up.svg");
var chevronDown = require("bootstrap-icons/icons/chevron-down.svg");
var chevronExpand = require("bootstrap-icons/icons/chevron-expand.svg");
var chevronLeft = require("bootstrap-icons/icons/chevron-left.svg");
var chevronRight = require("bootstrap-icons/icons/chevron-right.svg");
var chevronUp = require("bootstrap-icons/icons/chevron-up.svg");
var circleFill = require("bootstrap-icons/icons/circle-fill.svg");
var circleHalf = require("bootstrap-icons/icons/circle-half.svg");
var circleSquare = require("bootstrap-icons/icons/circle-square.svg");
var circle = require("bootstrap-icons/icons/circle.svg");
var clipboardData = require("bootstrap-icons/icons/clipboard-data.svg");
var clipboard = require("bootstrap-icons/icons/clipboard.svg");
var clockFill = require("bootstrap-icons/icons/clock-fill.svg");
var clockHistory = require("bootstrap-icons/icons/clock-history.svg");
var clock = require("bootstrap-icons/icons/clock.svg");
var cloudDownload = require("bootstrap-icons/icons/cloud-download.svg");
var cloudFill = require("bootstrap-icons/icons/cloud-fill.svg");
var cloudUpload = require("bootstrap-icons/icons/cloud-upload.svg");
var cloud = require("bootstrap-icons/icons/cloud.svg");
var codeSlash = require("bootstrap-icons/icons/code-slash.svg");
var code = require("bootstrap-icons/icons/code.svg");
var collectionFill = require("bootstrap-icons/icons/collection-fill.svg");
var collectionPlayFill = require("bootstrap-icons/icons/collection-play-fill.svg");
var collectionPlay = require("bootstrap-icons/icons/collection-play.svg");
var collection = require("bootstrap-icons/icons/collection.svg");
var columnsGap = require("bootstrap-icons/icons/columns-gap.svg");
var columns = require("bootstrap-icons/icons/columns.svg");
var command = require("bootstrap-icons/icons/command.svg");
var compass = require("bootstrap-icons/icons/compass.svg");
var coneStriped = require("bootstrap-icons/icons/cone-striped.svg");
var cone = require("bootstrap-icons/icons/cone.svg");
var controller = require("bootstrap-icons/icons/controller.svg");
var creditCard = require("bootstrap-icons/icons/credit-card.svg");
var crop = require("bootstrap-icons/icons/crop.svg");
var cursorFill = require("bootstrap-icons/icons/cursor-fill.svg");
var cursorText = require("bootstrap-icons/icons/cursor-text.svg");
var cursor = require("bootstrap-icons/icons/cursor.svg");
var dashCircleFill = require("bootstrap-icons/icons/dash-circle-fill.svg");
var dashCircle = require("bootstrap-icons/icons/dash-circle.svg");
var dashSquareFill = require("bootstrap-icons/icons/dash-square-fill.svg");
var dashSquare = require("bootstrap-icons/icons/dash-square.svg");
var dash = require("bootstrap-icons/icons/dash.svg");
var diamondFill = require("bootstrap-icons/icons/diamond-fill.svg");
var diamondHalf = require("bootstrap-icons/icons/diamond-half.svg");
var diamond = require("bootstrap-icons/icons/diamond.svg");
var displayFill = require("bootstrap-icons/icons/display-fill.svg");
var display = require("bootstrap-icons/icons/display.svg");
var dot = require("bootstrap-icons/icons/dot.svg");
var download = require("bootstrap-icons/icons/download.svg");
var dropletFill = require("bootstrap-icons/icons/droplet-fill.svg");
var dropletHalf = require("bootstrap-icons/icons/droplet-half.svg");
var droplet = require("bootstrap-icons/icons/droplet.svg");
var eggFill = require("bootstrap-icons/icons/egg-fill.svg");
var eggFried = require("bootstrap-icons/icons/egg-fried.svg");
var egg = require("bootstrap-icons/icons/egg.svg");
var ejectFill = require("bootstrap-icons/icons/eject-fill.svg");
var eject = require("bootstrap-icons/icons/eject.svg");
var envelopeFill = require("bootstrap-icons/icons/envelope-fill.svg");
var envelopeOpenFill = require("bootstrap-icons/icons/envelope-open-fill.svg");
var envelopeOpen = require("bootstrap-icons/icons/envelope-open.svg");
var envelope = require("bootstrap-icons/icons/envelope.svg");
var exclamationCircleFill = require("bootstrap-icons/icons/exclamation-circle-fill.svg");
var exclamationCircle = require("bootstrap-icons/icons/exclamation-circle.svg");
var exclamationDiamondFill = require("bootstrap-icons/icons/exclamation-diamond-fill.svg");
var exclamationDiamond = require("bootstrap-icons/icons/exclamation-diamond.svg");
var exclamationOctagonFill = require("bootstrap-icons/icons/exclamation-octagon-fill.svg");
var exclamationOctagon = require("bootstrap-icons/icons/exclamation-octagon.svg");
var exclamationSquareFill = require("bootstrap-icons/icons/exclamation-square-fill.svg");
var exclamationSquare = require("bootstrap-icons/icons/exclamation-square.svg");
var exclamationTriangleFill = require("bootstrap-icons/icons/exclamation-triangle-fill.svg");
var exclamationTriangle = require("bootstrap-icons/icons/exclamation-triangle.svg");
var exclamation = require("bootstrap-icons/icons/exclamation.svg");
var exclude = require("bootstrap-icons/icons/exclude.svg");
var eyeFill = require("bootstrap-icons/icons/eye-fill.svg");
var eyeSlashFill = require("bootstrap-icons/icons/eye-slash-fill.svg");
var eyeSlash = require("bootstrap-icons/icons/eye-slash.svg");
var eye = require("bootstrap-icons/icons/eye.svg");
var fileArrowDown = require("bootstrap-icons/icons/file-arrow-down.svg");
var fileArrowUp = require("bootstrap-icons/icons/file-arrow-up.svg");
var fileBreak = require("bootstrap-icons/icons/file-break.svg");
var fileCheck = require("bootstrap-icons/icons/file-check.svg");
var fileCode = require("bootstrap-icons/icons/file-code.svg");
var fileDiff = require("bootstrap-icons/icons/file-diff.svg");
var fileEarmarkArrowDown = require("bootstrap-icons/icons/file-earmark-arrow-down.svg");
var fileEarmarkArrowUp = require("bootstrap-icons/icons/file-earmark-arrow-up.svg");
var fileEarmarkBreak = require("bootstrap-icons/icons/file-earmark-break.svg");
var fileEarmarkCheck = require("bootstrap-icons/icons/file-earmark-check.svg");
var fileEarmarkCode = require("bootstrap-icons/icons/file-earmark-code.svg");
var fileEarmarkDiff = require("bootstrap-icons/icons/file-earmark-diff.svg");
var fileEarmarkMinus = require("bootstrap-icons/icons/file-earmark-minus.svg");
var fileEarmarkPlus = require("bootstrap-icons/icons/file-earmark-plus.svg");
var fileEarmarkRuled = require("bootstrap-icons/icons/file-earmark-ruled.svg");
var fileEarmarkSpreadsheet = require("bootstrap-icons/icons/file-earmark-spreadsheet.svg");
var fileEarmarkText = require("bootstrap-icons/icons/file-earmark-text.svg");
var fileEarmarkZip = require("bootstrap-icons/icons/file-earmark-zip.svg");
var fileEarmark = require("bootstrap-icons/icons/file-earmark.svg");
var fileMinus = require("bootstrap-icons/icons/file-minus.svg");
var filePlus = require("bootstrap-icons/icons/file-plus.svg");
var filePost = require("bootstrap-icons/icons/file-post.svg");
var fileRichtext = require("bootstrap-icons/icons/file-richtext.svg");
var fileRuled = require("bootstrap-icons/icons/file-ruled.svg");
var fileSpreadsheet = require("bootstrap-icons/icons/file-spreadsheet.svg");
var fileText = require("bootstrap-icons/icons/file-text.svg");
var fileZip = require("bootstrap-icons/icons/file-zip.svg");
var file = require("bootstrap-icons/icons/file.svg");
var filesAlt = require("bootstrap-icons/icons/files-alt.svg");
var files = require("bootstrap-icons/icons/files.svg");
var film = require("bootstrap-icons/icons/film.svg");
var filterLeft = require("bootstrap-icons/icons/filter-left.svg");
var filterRight = require("bootstrap-icons/icons/filter-right.svg");
var filter = require("bootstrap-icons/icons/filter.svg");
var flagFill = require("bootstrap-icons/icons/flag-fill.svg");
var flag = require("bootstrap-icons/icons/flag.svg");
var folderCheck = require("bootstrap-icons/icons/folder-check.svg");
var folderFill = require("bootstrap-icons/icons/folder-fill.svg");
var folderMinus = require("bootstrap-icons/icons/folder-minus.svg");
var folderPlus = require("bootstrap-icons/icons/folder-plus.svg");
var folderSymlinkFill = require("bootstrap-icons/icons/folder-symlink-fill.svg");
var folderSymlink = require("bootstrap-icons/icons/folder-symlink.svg");
var folder = require("bootstrap-icons/icons/folder.svg");
var fonts = require("bootstrap-icons/icons/fonts.svg");
var forwardFill = require("bootstrap-icons/icons/forward-fill.svg");
var forward = require("bootstrap-icons/icons/forward.svg");
var fullscreenExit = require("bootstrap-icons/icons/fullscreen-exit.svg");
var fullscreen = require("bootstrap-icons/icons/fullscreen.svg");
var funnelFill = require("bootstrap-icons/icons/funnel-fill.svg");
var funnel = require("bootstrap-icons/icons/funnel.svg");
var gearFill = require("bootstrap-icons/icons/gear-fill.svg");
var gearWideConnected = require("bootstrap-icons/icons/gear-wide-connected.svg");
var gearWide = require("bootstrap-icons/icons/gear-wide.svg");
var gear = require("bootstrap-icons/icons/gear.svg");
var gem = require("bootstrap-icons/icons/gem.svg");
var geoAlt = require("bootstrap-icons/icons/geo-alt.svg");
var geo = require("bootstrap-icons/icons/geo.svg");
var giftFill = require("bootstrap-icons/icons/gift-fill.svg");
var gift = require("bootstrap-icons/icons/gift.svg");
var graphDown = require("bootstrap-icons/icons/graph-down.svg");
var graphUp = require("bootstrap-icons/icons/graph-up.svg");
var grid1x2Fill = require("bootstrap-icons/icons/grid-1x2-fill.svg");
var grid1x2 = require("bootstrap-icons/icons/grid-1x2.svg");
var grid3x2GapFill = require("bootstrap-icons/icons/grid-3x2-gap-fill.svg");
var grid3x2Gap = require("bootstrap-icons/icons/grid-3x2-gap.svg");
var grid3x2 = require("bootstrap-icons/icons/grid-3x2.svg");
var grid3x3GapFill = require("bootstrap-icons/icons/grid-3x3-gap-fill.svg");
var grid3x3Gap = require("bootstrap-icons/icons/grid-3x3-gap.svg");
var grid3x3 = require("bootstrap-icons/icons/grid-3x3.svg");
var gridFill = require("bootstrap-icons/icons/grid-fill.svg");
var grid = require("bootstrap-icons/icons/grid.svg");
var hammer = require("bootstrap-icons/icons/hammer.svg");
var hash = require("bootstrap-icons/icons/hash.svg");
var heartFill = require("bootstrap-icons/icons/heart-fill.svg");
var heartHalf = require("bootstrap-icons/icons/heart-half.svg");
var heart = require("bootstrap-icons/icons/heart.svg");
var houseDoorFill = require("bootstrap-icons/icons/house-door-fill.svg");
var houseDoor = require("bootstrap-icons/icons/house-door.svg");
var houseFill = require("bootstrap-icons/icons/house-fill.svg");
var house = require("bootstrap-icons/icons/house.svg");
var hr = require("bootstrap-icons/icons/hr.svg");
var imageAlt = require("bootstrap-icons/icons/image-alt.svg");
var imageFill = require("bootstrap-icons/icons/image-fill.svg");
var image = require("bootstrap-icons/icons/image.svg");
var images = require("bootstrap-icons/icons/images.svg");
var inboxFill = require("bootstrap-icons/icons/inbox-fill.svg");
var inbox = require("bootstrap-icons/icons/inbox.svg");
var inboxesFill = require("bootstrap-icons/icons/inboxes-fill.svg");
var inboxes = require("bootstrap-icons/icons/inboxes.svg");
var infoCircleFill = require("bootstrap-icons/icons/info-circle-fill.svg");
var infoCircle = require("bootstrap-icons/icons/info-circle.svg");
var infoSquareFill = require("bootstrap-icons/icons/info-square-fill.svg");
var infoSquare = require("bootstrap-icons/icons/info-square.svg");
var info = require("bootstrap-icons/icons/info.svg");
var intersect = require("bootstrap-icons/icons/intersect.svg");
var justifyLeft = require("bootstrap-icons/icons/justify-left.svg");
var justifyRight = require("bootstrap-icons/icons/justify-right.svg");
var justify = require("bootstrap-icons/icons/justify.svg");
var kanbanFill = require("bootstrap-icons/icons/kanban-fill.svg");
var kanban = require("bootstrap-icons/icons/kanban.svg");
var laptop = require("bootstrap-icons/icons/laptop.svg");
var layersFill = require("bootstrap-icons/icons/layers-fill.svg");
var layersHalf = require("bootstrap-icons/icons/layers-half.svg");
var layers = require("bootstrap-icons/icons/layers.svg");
var layoutSidebarInsetReverse = require("bootstrap-icons/icons/layout-sidebar-inset-reverse.svg");
var layoutSidebarInset = require("bootstrap-icons/icons/layout-sidebar-inset.svg");
var layoutSidebarReverse = require("bootstrap-icons/icons/layout-sidebar-reverse.svg");
var layoutSidebar = require("bootstrap-icons/icons/layout-sidebar.svg");
var layoutSplit = require("bootstrap-icons/icons/layout-split.svg");
var layoutTextSidebarReverse = require("bootstrap-icons/icons/layout-text-sidebar-reverse.svg");
var layoutTextSidebar = require("bootstrap-icons/icons/layout-text-sidebar.svg");
var layoutTextWindowReverse = require("bootstrap-icons/icons/layout-text-window-reverse.svg");
var layoutTextWindow = require("bootstrap-icons/icons/layout-text-window.svg");
var layoutThreeColumns = require("bootstrap-icons/icons/layout-three-columns.svg");
var layoutWtf = require("bootstrap-icons/icons/layout-wtf.svg");
var lifePreserver = require("bootstrap-icons/icons/life-preserver.svg");
var lightningFill = require("bootstrap-icons/icons/lightning-fill.svg");
var lightning = require("bootstrap-icons/icons/lightning.svg");
var link45deg = require("bootstrap-icons/icons/link-45deg.svg");
var link = require("bootstrap-icons/icons/link.svg");
var listCheck = require("bootstrap-icons/icons/list-check.svg");
var listNested = require("bootstrap-icons/icons/list-nested.svg");
var listOl = require("bootstrap-icons/icons/list-ol.svg");
var listTask = require("bootstrap-icons/icons/list-task.svg");
var listUl = require("bootstrap-icons/icons/list-ul.svg");
var list = require("bootstrap-icons/icons/list.svg");
var lockFill = require("bootstrap-icons/icons/lock-fill.svg");
var lock = require("bootstrap-icons/icons/lock.svg");
var map = require("bootstrap-icons/icons/map.svg");
var micFill = require("bootstrap-icons/icons/mic-fill.svg");
var micMuteFill = require("bootstrap-icons/icons/mic-mute-fill.svg");
var micMute = require("bootstrap-icons/icons/mic-mute.svg");
var mic = require("bootstrap-icons/icons/mic.svg");
var moon = require("bootstrap-icons/icons/moon.svg");
var musicNoteBeamed = require("bootstrap-icons/icons/music-note-beamed.svg");
var musicNoteList = require("bootstrap-icons/icons/music-note-list.svg");
var musicNote = require("bootstrap-icons/icons/music-note.svg");
var musicPlayerFill = require("bootstrap-icons/icons/music-player-fill.svg");
var musicPlayer = require("bootstrap-icons/icons/music-player.svg");
var newspaper = require("bootstrap-icons/icons/newspaper.svg");
var octagonFill = require("bootstrap-icons/icons/octagon-fill.svg");
var octagonHalf = require("bootstrap-icons/icons/octagon-half.svg");
var octagon = require("bootstrap-icons/icons/octagon.svg");
var option = require("bootstrap-icons/icons/option.svg");
var outlet = require("bootstrap-icons/icons/outlet.svg");
var paperclip = require("bootstrap-icons/icons/paperclip.svg");
var pauseFill = require("bootstrap-icons/icons/pause-fill.svg");
var pause = require("bootstrap-icons/icons/pause.svg");
var pen = require("bootstrap-icons/icons/pen.svg");
var pencilSquare = require("bootstrap-icons/icons/pencil-square.svg");
var pencil = require("bootstrap-icons/icons/pencil.svg");
var pentagonFill = require("bootstrap-icons/icons/pentagon-fill.svg");
var pentagonHalf = require("bootstrap-icons/icons/pentagon-half.svg");
var pentagon = require("bootstrap-icons/icons/pentagon.svg");
var peopleCircle = require("bootstrap-icons/icons/people-circle.svg");
var peopleFill = require("bootstrap-icons/icons/people-fill.svg");
var people = require("bootstrap-icons/icons/people.svg");
var personBoundingBox = require("bootstrap-icons/icons/person-bounding-box.svg");
var personCheckFill = require("bootstrap-icons/icons/person-check-fill.svg");
var personCheck = require("bootstrap-icons/icons/person-check.svg");
var personDashFill = require("bootstrap-icons/icons/person-dash-fill.svg");
var personDash = require("bootstrap-icons/icons/person-dash.svg");
var personFill = require("bootstrap-icons/icons/person-fill.svg");
var personLinesFill = require("bootstrap-icons/icons/person-lines-fill.svg");
var personPlusFill = require("bootstrap-icons/icons/person-plus-fill.svg");
var personPlus = require("bootstrap-icons/icons/person-plus.svg");
var personSquare = require("bootstrap-icons/icons/person-square.svg");
var person = require("bootstrap-icons/icons/person.svg");
var phoneLandscape = require("bootstrap-icons/icons/phone-landscape.svg");
var phone = require("bootstrap-icons/icons/phone.svg");
var pieChartFill = require("bootstrap-icons/icons/pie-chart-fill.svg");
var pieChart = require("bootstrap-icons/icons/pie-chart.svg");
var pipFill = require("bootstrap-icons/icons/pip-fill.svg");
var pip = require("bootstrap-icons/icons/pip.svg");
var playFill = require("bootstrap-icons/icons/play-fill.svg");
var play = require("bootstrap-icons/icons/play.svg");
var plug = require("bootstrap-icons/icons/plug.svg");
var plusCircleFill = require("bootstrap-icons/icons/plus-circle-fill.svg");
var plusCircle = require("bootstrap-icons/icons/plus-circle.svg");
var plusSquareFill = require("bootstrap-icons/icons/plus-square-fill.svg");
var plusSquare = require("bootstrap-icons/icons/plus-square.svg");
var plus = require("bootstrap-icons/icons/plus.svg");
var power = require("bootstrap-icons/icons/power.svg");
var puzzleFill = require("bootstrap-icons/icons/puzzle-fill.svg");
var puzzle = require("bootstrap-icons/icons/puzzle.svg");
var questionCircleFill = require("bootstrap-icons/icons/question-circle-fill.svg");
var questionCircle = require("bootstrap-icons/icons/question-circle.svg");
var questionDiamondFill = require("bootstrap-icons/icons/question-diamond-fill.svg");
var questionDiamond = require("bootstrap-icons/icons/question-diamond.svg");
var questionOctagonFill = require("bootstrap-icons/icons/question-octagon-fill.svg");
var questionOctagon = require("bootstrap-icons/icons/question-octagon.svg");
var questionSquareFill = require("bootstrap-icons/icons/question-square-fill.svg");
var questionSquare = require("bootstrap-icons/icons/question-square.svg");
var question = require("bootstrap-icons/icons/question.svg");
var replyAllFill = require("bootstrap-icons/icons/reply-all-fill.svg");
var replyAll = require("bootstrap-icons/icons/reply-all.svg");
var replyFill = require("bootstrap-icons/icons/reply-fill.svg");
var reply = require("bootstrap-icons/icons/reply.svg");
var screwdriver = require("bootstrap-icons/icons/screwdriver.svg");
var search = require("bootstrap-icons/icons/search.svg");
var server = require("bootstrap-icons/icons/server.svg");
var shieldFill = require("bootstrap-icons/icons/shield-fill.svg");
var shieldLockFill = require("bootstrap-icons/icons/shield-lock-fill.svg");
var shieldLock = require("bootstrap-icons/icons/shield-lock.svg");
var shieldShaded = require("bootstrap-icons/icons/shield-shaded.svg");
var shield = require("bootstrap-icons/icons/shield.svg");
var shiftFill = require("bootstrap-icons/icons/shift-fill.svg");
var shift = require("bootstrap-icons/icons/shift.svg");
var shuffle = require("bootstrap-icons/icons/shuffle.svg");
var skipBackwardFill = require("bootstrap-icons/icons/skip-backward-fill.svg");
var skipBackward = require("bootstrap-icons/icons/skip-backward.svg");
var skipEndFill = require("bootstrap-icons/icons/skip-end-fill.svg");
var skipEnd = require("bootstrap-icons/icons/skip-end.svg");
var skipForwardFill = require("bootstrap-icons/icons/skip-forward-fill.svg");
var skipForward = require("bootstrap-icons/icons/skip-forward.svg");
var skipStartFill = require("bootstrap-icons/icons/skip-start-fill.svg");
var skipStart = require("bootstrap-icons/icons/skip-start.svg");
var slashCircleFill = require("bootstrap-icons/icons/slash-circle-fill.svg");
var slashCircle = require("bootstrap-icons/icons/slash-circle.svg");
var slashSquareFill = require("bootstrap-icons/icons/slash-square-fill.svg");
var slashSquare = require("bootstrap-icons/icons/slash-square.svg");
var slash = require("bootstrap-icons/icons/slash.svg");
var sliders = require("bootstrap-icons/icons/sliders.svg");
var soundwave = require("bootstrap-icons/icons/soundwave.svg");
var speaker = require("bootstrap-icons/icons/speaker.svg");
var squareFill = require("bootstrap-icons/icons/square-fill.svg");
var squareHalf = require("bootstrap-icons/icons/square-half.svg");
var square = require("bootstrap-icons/icons/square.svg");
var starFill = require("bootstrap-icons/icons/star-fill.svg");
var starHalf = require("bootstrap-icons/icons/star-half.svg");
var star = require("bootstrap-icons/icons/star.svg");
var stopFill = require("bootstrap-icons/icons/stop-fill.svg");
var stop = require("bootstrap-icons/icons/stop.svg");
var stopwatchFill = require("bootstrap-icons/icons/stopwatch-fill.svg");
var stopwatch = require("bootstrap-icons/icons/stopwatch.svg");
var subtract = require("bootstrap-icons/icons/subtract.svg");
var sun = require("bootstrap-icons/icons/sun.svg");
var table = require("bootstrap-icons/icons/table.svg");
var tabletLandscape = require("bootstrap-icons/icons/tablet-landscape.svg");
var tablet = require("bootstrap-icons/icons/tablet.svg");
var tagFill = require("bootstrap-icons/icons/tag-fill.svg");
var tag = require("bootstrap-icons/icons/tag.svg");
var terminalFill = require("bootstrap-icons/icons/terminal-fill.svg");
var terminal = require("bootstrap-icons/icons/terminal.svg");
var textCenter = require("bootstrap-icons/icons/text-center.svg");
var textIndentLeft = require("bootstrap-icons/icons/text-indent-left.svg");
var textIndentRight = require("bootstrap-icons/icons/text-indent-right.svg");
var textLeft = require("bootstrap-icons/icons/text-left.svg");
var textRight = require("bootstrap-icons/icons/text-right.svg");
var textareaT = require("bootstrap-icons/icons/textarea-t.svg");
var textarea = require("bootstrap-icons/icons/textarea.svg");
var threeDotsVertical = require("bootstrap-icons/icons/three-dots-vertical.svg");
var threeDots = require("bootstrap-icons/icons/three-dots.svg");
var toggleOff = require("bootstrap-icons/icons/toggle-off.svg");
var toggleOn = require("bootstrap-icons/icons/toggle-on.svg");
var toggles = require("bootstrap-icons/icons/toggles.svg");
var tools = require("bootstrap-icons/icons/tools.svg");
var trashFill = require("bootstrap-icons/icons/trash-fill.svg");
var trash = require("bootstrap-icons/icons/trash.svg");
var trash2Fill = require("bootstrap-icons/icons/trash2-fill.svg");
var trash2 = require("bootstrap-icons/icons/trash2.svg");
var triangleFill = require("bootstrap-icons/icons/triangle-fill.svg");
var triangleHalf = require("bootstrap-icons/icons/triangle-half.svg");
var triangle = require("bootstrap-icons/icons/triangle.svg");
var trophy = require("bootstrap-icons/icons/trophy.svg");
var tvFill = require("bootstrap-icons/icons/tv-fill.svg");
var tv = require("bootstrap-icons/icons/tv.svg");
var typeBold = require("bootstrap-icons/icons/type-bold.svg");
var typeH1 = require("bootstrap-icons/icons/type-h1.svg");
var typeH2 = require("bootstrap-icons/icons/type-h2.svg");
var typeH3 = require("bootstrap-icons/icons/type-h3.svg");
var typeItalic = require("bootstrap-icons/icons/type-italic.svg");
var typeStrikethrough = require("bootstrap-icons/icons/type-strikethrough.svg");
var typeUnderline = require("bootstrap-icons/icons/type-underline.svg");
var type = require("bootstrap-icons/icons/type.svg");
var union = require("bootstrap-icons/icons/union.svg");
var unlockFill = require("bootstrap-icons/icons/unlock-fill.svg");
var unlock = require("bootstrap-icons/icons/unlock.svg");
var upload = require("bootstrap-icons/icons/upload.svg");
var viewList = require("bootstrap-icons/icons/view-list.svg");
var viewStacked = require("bootstrap-icons/icons/view-stacked.svg");
var volumeDownFill = require("bootstrap-icons/icons/volume-down-fill.svg");
var volumeDown = require("bootstrap-icons/icons/volume-down.svg");
var volumeMuteFill = require("bootstrap-icons/icons/volume-mute-fill.svg");
var volumeMute = require("bootstrap-icons/icons/volume-mute.svg");
var volumeUpFill = require("bootstrap-icons/icons/volume-up-fill.svg");
var volumeUp = require("bootstrap-icons/icons/volume-up.svg");
var vr = require("bootstrap-icons/icons/vr.svg");
var wallet = require("bootstrap-icons/icons/wallet.svg");
var watch = require("bootstrap-icons/icons/watch.svg");
var wifi = require("bootstrap-icons/icons/wifi.svg");
var window = require("bootstrap-icons/icons/window.svg");
var wrench = require("bootstrap-icons/icons/wrench.svg");
var xCircleFill = require("bootstrap-icons/icons/x-circle-fill.svg");
var xCircle = require("bootstrap-icons/icons/x-circle.svg");
var xDiamondFill = require("bootstrap-icons/icons/x-diamond-fill.svg");
var xDiamond = require("bootstrap-icons/icons/x-diamond.svg");
var xOctagonFill = require("bootstrap-icons/icons/x-octagon-fill.svg");
var xOctagon = require("bootstrap-icons/icons/x-octagon.svg");
var xSquareFill = require("bootstrap-icons/icons/x-square-fill.svg");
var xSquare = require("bootstrap-icons/icons/x-square.svg");
var x = require("bootstrap-icons/icons/x.svg");
// Renders an icon by type
exports.Icons = function (iconType, height, width) {
    // See which icon is selected
    switch (iconType) {
        // alarm-fill.svg
        case 1:
            return generate_1.default(alarmFill, height, width);
        // alarm.svg
        case 2:
            return generate_1.default(alarm, height, width);
        // alt.svg
        case 3:
            return generate_1.default(alt, height, width);
        // app-indicator.svg
        case 4:
            return generate_1.default(appIndicator, height, width);
        // app.svg
        case 5:
            return generate_1.default(app, height, width);
        // archive-fill.svg
        case 6:
            return generate_1.default(archiveFill, height, width);
        // archive.svg
        case 7:
            return generate_1.default(archive, height, width);
        // arrow-90deg-down.svg
        case 8:
            return generate_1.default(arrow90degDown, height, width);
        // arrow-90deg-left.svg
        case 9:
            return generate_1.default(arrow90degLeft, height, width);
        // arrow-90deg-right.svg
        case 10:
            return generate_1.default(arrow90degRight, height, width);
        // arrow-90deg-up.svg
        case 11:
            return generate_1.default(arrow90degUp, height, width);
        // arrow-bar-down.svg
        case 12:
            return generate_1.default(arrowBarDown, height, width);
        // arrow-bar-left.svg
        case 13:
            return generate_1.default(arrowBarLeft, height, width);
        // arrow-bar-right.svg
        case 14:
            return generate_1.default(arrowBarRight, height, width);
        // arrow-bar-up.svg
        case 15:
            return generate_1.default(arrowBarUp, height, width);
        // arrow-clockwise.svg
        case 16:
            return generate_1.default(arrowClockwise, height, width);
        // arrow-counterclockwise.svg
        case 17:
            return generate_1.default(arrowCounterclockwise, height, width);
        // arrow-down-left.svg
        case 18:
            return generate_1.default(arrowDownLeft, height, width);
        // arrow-down-right.svg
        case 19:
            return generate_1.default(arrowDownRight, height, width);
        // arrow-down-short.svg
        case 20:
            return generate_1.default(arrowDownShort, height, width);
        // arrow-down.svg
        case 21:
            return generate_1.default(arrowDown, height, width);
        // arrow-left-right.svg
        case 22:
            return generate_1.default(arrowLeftRight, height, width);
        // arrow-left-short.svg
        case 23:
            return generate_1.default(arrowLeftShort, height, width);
        // arrow-left.svg
        case 24:
            return generate_1.default(arrowLeft, height, width);
        // arrow-repeat.svg
        case 25:
            return generate_1.default(arrowRepeat, height, width);
        // arrow-return-left.svg
        case 26:
            return generate_1.default(arrowReturnLeft, height, width);
        // arrow-return-right.svg
        case 27:
            return generate_1.default(arrowReturnRight, height, width);
        // arrow-right-short.svg
        case 28:
            return generate_1.default(arrowRightShort, height, width);
        // arrow-right.svg
        case 29:
            return generate_1.default(arrowRight, height, width);
        // arrow-up-down.svg
        case 30:
            return generate_1.default(arrowUpDown, height, width);
        // arrow-up-left.svg
        case 31:
            return generate_1.default(arrowUpLeft, height, width);
        // arrow-up-right.svg
        case 32:
            return generate_1.default(arrowUpRight, height, width);
        // arrow-up-short.svg
        case 33:
            return generate_1.default(arrowUpShort, height, width);
        // arrow-up.svg
        case 34:
            return generate_1.default(arrowUp, height, width);
        // arrows-angle-contract.svg
        case 35:
            return generate_1.default(arrowsAngleContract, height, width);
        // arrows-angle-expand.svg
        case 36:
            return generate_1.default(arrowsAngleExpand, height, width);
        // arrows-collapse.svg
        case 37:
            return generate_1.default(arrowsCollapse, height, width);
        // arrows-expand.svg
        case 38:
            return generate_1.default(arrowsExpand, height, width);
        // arrows-fullscreen.svg
        case 39:
            return generate_1.default(arrowsFullscreen, height, width);
        // arrows-move.svg
        case 40:
            return generate_1.default(arrowsMove, height, width);
        // aspect-ratio-fill.svg
        case 41:
            return generate_1.default(aspectRatioFill, height, width);
        // aspect-ratio.svg
        case 42:
            return generate_1.default(aspectRatio, height, width);
        // at.svg
        case 43:
            return generate_1.default(at, height, width);
        // award-fill.svg
        case 44:
            return generate_1.default(awardFill, height, width);
        // award.svg
        case 45:
            return generate_1.default(award, height, width);
        // backspace-fill.svg
        case 46:
            return generate_1.default(backspaceFill, height, width);
        // backspace-reverse-fill.svg
        case 47:
            return generate_1.default(backspaceReverseFill, height, width);
        // backspace-reverse.svg
        case 48:
            return generate_1.default(backspaceReverse, height, width);
        // backspace.svg
        case 49:
            return generate_1.default(backspace, height, width);
        // bag-fill.svg
        case 50:
            return generate_1.default(bagFill, height, width);
        // bag.svg
        case 51:
            return generate_1.default(bag, height, width);
        // bar-chart-fill.svg
        case 52:
            return generate_1.default(barChartFill, height, width);
        // bar-chart.svg
        case 53:
            return generate_1.default(barChart, height, width);
        // battery-charging.svg
        case 54:
            return generate_1.default(batteryCharging, height, width);
        // battery-full.svg
        case 55:
            return generate_1.default(batteryFull, height, width);
        // battery-half.svg
        case 56:
            return generate_1.default(batteryHalf, height, width);
        // battery.svg
        case 57:
            return generate_1.default(battery, height, width);
        // bell-fill.svg
        case 58:
            return generate_1.default(bellFill, height, width);
        // bell.svg
        case 59:
            return generate_1.default(bell, height, width);
        // blockquote-left.svg
        case 60:
            return generate_1.default(blockquoteLeft, height, width);
        // blockquote-right.svg
        case 61:
            return generate_1.default(blockquoteRight, height, width);
        // book-half.svg
        case 62:
            return generate_1.default(bookHalf, height, width);
        // book.svg
        case 63:
            return generate_1.default(book, height, width);
        // bookmark-check.svg
        case 64:
            return generate_1.default(bookmarkCheck, height, width);
        // bookmark-dash.svg
        case 65:
            return generate_1.default(bookmarkDash, height, width);
        // bookmark-fill.svg
        case 66:
            return generate_1.default(bookmarkFill, height, width);
        // bookmark-plus.svg
        case 67:
            return generate_1.default(bookmarkPlus, height, width);
        // bookmark.svg
        case 68:
            return generate_1.default(bookmark, height, width);
        // bookmarks-fill.svg
        case 69:
            return generate_1.default(bookmarksFill, height, width);
        // bookmarks.svg
        case 70:
            return generate_1.default(bookmarks, height, width);
        // bootstrap-fill.svg
        case 71:
            return generate_1.default(bootstrapFill, height, width);
        // bootstrap-reboot.svg
        case 72:
            return generate_1.default(bootstrapReboot, height, width);
        // bootstrap.svg
        case 73:
            return generate_1.default(bootstrap, height, width);
        // bounding-box-circles.svg
        case 74:
            return generate_1.default(boundingBoxCircles, height, width);
        // bounding-box.svg
        case 75:
            return generate_1.default(boundingBox, height, width);
        // box-arrow-down-left.svg
        case 76:
            return generate_1.default(boxArrowDownLeft, height, width);
        // box-arrow-down-right.svg
        case 77:
            return generate_1.default(boxArrowDownRight, height, width);
        // box-arrow-down.svg
        case 78:
            return generate_1.default(boxArrowDown, height, width);
        // box-arrow-in-down-left.svg
        case 79:
            return generate_1.default(boxArrowInDownLeft, height, width);
        // box-arrow-in-down-right.svg
        case 80:
            return generate_1.default(boxArrowInDownRight, height, width);
        // box-arrow-in-down.svg
        case 81:
            return generate_1.default(boxArrowInDown, height, width);
        // box-arrow-in-left.svg
        case 82:
            return generate_1.default(boxArrowInLeft, height, width);
        // box-arrow-in-right.svg
        case 83:
            return generate_1.default(boxArrowInRight, height, width);
        // box-arrow-in-up-left.svg
        case 84:
            return generate_1.default(boxArrowInUpLeft, height, width);
        // box-arrow-in-up-right.svg
        case 85:
            return generate_1.default(boxArrowInUpRight, height, width);
        // box-arrow-in-up.svg
        case 86:
            return generate_1.default(boxArrowInUp, height, width);
        // box-arrow-left.svg
        case 87:
            return generate_1.default(boxArrowLeft, height, width);
        // box-arrow-right.svg
        case 88:
            return generate_1.default(boxArrowRight, height, width);
        // box-arrow-up-left.svg
        case 89:
            return generate_1.default(boxArrowUpLeft, height, width);
        // box-arrow-up-right.svg
        case 90:
            return generate_1.default(boxArrowUpRight, height, width);
        // box-arrow-up.svg
        case 91:
            return generate_1.default(boxArrowUp, height, width);
        // braces.svg
        case 92:
            return generate_1.default(braces, height, width);
        // briefcase-fill.svg
        case 93:
            return generate_1.default(briefcaseFill, height, width);
        // briefcase.svg
        case 94:
            return generate_1.default(briefcase, height, width);
        // brightness-alt-high-fill.svg
        case 95:
            return generate_1.default(brightnessAltHighFill, height, width);
        // brightness-alt-high.svg
        case 96:
            return generate_1.default(brightnessAltHigh, height, width);
        // brightness-alt-low-fill.svg
        case 97:
            return generate_1.default(brightnessAltLowFill, height, width);
        // brightness-alt-low.svg
        case 98:
            return generate_1.default(brightnessAltLow, height, width);
        // brightness-high-fill.svg
        case 99:
            return generate_1.default(brightnessHighFill, height, width);
        // brightness-high.svg
        case 100:
            return generate_1.default(brightnessHigh, height, width);
        // brightness-low-fill.svg
        case 101:
            return generate_1.default(brightnessLowFill, height, width);
        // brightness-low.svg
        case 102:
            return generate_1.default(brightnessLow, height, width);
        // brush.svg
        case 103:
            return generate_1.default(brush, height, width);
        // bucket-fill.svg
        case 104:
            return generate_1.default(bucketFill, height, width);
        // bucket.svg
        case 105:
            return generate_1.default(bucket, height, width);
        // building.svg
        case 106:
            return generate_1.default(building, height, width);
        // bullseye.svg
        case 107:
            return generate_1.default(bullseye, height, width);
        // calendar-fill.svg
        case 108:
            return generate_1.default(calendarFill, height, width);
        // calendar.svg
        case 109:
            return generate_1.default(calendar, height, width);
        // camera-video-fill.svg
        case 110:
            return generate_1.default(cameraVideoFill, height, width);
        // camera-video.svg
        case 111:
            return generate_1.default(cameraVideo, height, width);
        // camera.svg
        case 112:
            return generate_1.default(camera, height, width);
        // capslock-fill.svg
        case 113:
            return generate_1.default(capslockFill, height, width);
        // capslock.svg
        case 114:
            return generate_1.default(capslock, height, width);
        // card-checklist.svg
        case 115:
            return generate_1.default(cardChecklist, height, width);
        // card-heading.svg
        case 116:
            return generate_1.default(cardHeading, height, width);
        // card-image.svg
        case 117:
            return generate_1.default(cardImage, height, width);
        // card-list.svg
        case 118:
            return generate_1.default(cardList, height, width);
        // card-text.svg
        case 119:
            return generate_1.default(cardText, height, width);
        // caret-down-fill.svg
        case 120:
            return generate_1.default(caretDownFill, height, width);
        // caret-down.svg
        case 121:
            return generate_1.default(caretDown, height, width);
        // caret-left-fill.svg
        case 122:
            return generate_1.default(caretLeftFill, height, width);
        // caret-left.svg
        case 123:
            return generate_1.default(caretLeft, height, width);
        // caret-right-fill.svg
        case 124:
            return generate_1.default(caretRightFill, height, width);
        // caret-right.svg
        case 125:
            return generate_1.default(caretRight, height, width);
        // caret-up-fill.svg
        case 126:
            return generate_1.default(caretUpFill, height, width);
        // caret-up.svg
        case 127:
            return generate_1.default(caretUp, height, width);
        // chat-dots-fill.svg
        case 128:
            return generate_1.default(chatDotsFill, height, width);
        // chat-dots.svg
        case 129:
            return generate_1.default(chatDots, height, width);
        // chat-fill.svg
        case 130:
            return generate_1.default(chatFill, height, width);
        // chat-quote-fill.svg
        case 131:
            return generate_1.default(chatQuoteFill, height, width);
        // chat-quote.svg
        case 132:
            return generate_1.default(chatQuote, height, width);
        // chat-square-dots-fill.svg
        case 133:
            return generate_1.default(chatSquareDotsFill, height, width);
        // chat-square-dots.svg
        case 134:
            return generate_1.default(chatSquareDots, height, width);
        // chat-square-fill.svg
        case 135:
            return generate_1.default(chatSquareFill, height, width);
        // chat-square-quote-fill.svg
        case 136:
            return generate_1.default(chatSquareQuoteFill, height, width);
        // chat-square-quote.svg
        case 137:
            return generate_1.default(chatSquareQuote, height, width);
        // chat-square.svg
        case 138:
            return generate_1.default(chatSquare, height, width);
        // chat.svg
        case 139:
            return generate_1.default(chat, height, width);
        // check-all.svg
        case 140:
            return generate_1.default(checkAll, height, width);
        // check-box.svg
        case 141:
            return generate_1.default(checkBox, height, width);
        // check-circle.svg
        case 142:
            return generate_1.default(checkCircle, height, width);
        // check.svg
        case 143:
            return generate_1.default(check, height, width);
        // chevron-bar-contract.svg
        case 144:
            return generate_1.default(chevronBarContract, height, width);
        // chevron-bar-down.svg
        case 145:
            return generate_1.default(chevronBarDown, height, width);
        // chevron-bar-expand.svg
        case 146:
            return generate_1.default(chevronBarExpand, height, width);
        // chevron-bar-left.svg
        case 147:
            return generate_1.default(chevronBarLeft, height, width);
        // chevron-bar-right.svg
        case 148:
            return generate_1.default(chevronBarRight, height, width);
        // chevron-bar-up.svg
        case 149:
            return generate_1.default(chevronBarUp, height, width);
        // chevron-compact-down.svg
        case 150:
            return generate_1.default(chevronCompactDown, height, width);
        // chevron-compact-left.svg
        case 151:
            return generate_1.default(chevronCompactLeft, height, width);
        // chevron-compact-right.svg
        case 152:
            return generate_1.default(chevronCompactRight, height, width);
        // chevron-compact-up.svg
        case 153:
            return generate_1.default(chevronCompactUp, height, width);
        // chevron-contract.svg
        case 154:
            return generate_1.default(chevronContract, height, width);
        // chevron-double-down.svg
        case 155:
            return generate_1.default(chevronDoubleDown, height, width);
        // chevron-double-left.svg
        case 156:
            return generate_1.default(chevronDoubleLeft, height, width);
        // chevron-double-right.svg
        case 157:
            return generate_1.default(chevronDoubleRight, height, width);
        // chevron-double-up.svg
        case 158:
            return generate_1.default(chevronDoubleUp, height, width);
        // chevron-down.svg
        case 159:
            return generate_1.default(chevronDown, height, width);
        // chevron-expand.svg
        case 160:
            return generate_1.default(chevronExpand, height, width);
        // chevron-left.svg
        case 161:
            return generate_1.default(chevronLeft, height, width);
        // chevron-right.svg
        case 162:
            return generate_1.default(chevronRight, height, width);
        // chevron-up.svg
        case 163:
            return generate_1.default(chevronUp, height, width);
        // circle-fill.svg
        case 164:
            return generate_1.default(circleFill, height, width);
        // circle-half.svg
        case 165:
            return generate_1.default(circleHalf, height, width);
        // circle-square.svg
        case 166:
            return generate_1.default(circleSquare, height, width);
        // circle.svg
        case 167:
            return generate_1.default(circle, height, width);
        // clipboard-data.svg
        case 168:
            return generate_1.default(clipboardData, height, width);
        // clipboard.svg
        case 169:
            return generate_1.default(clipboard, height, width);
        // clock-fill.svg
        case 170:
            return generate_1.default(clockFill, height, width);
        // clock-history.svg
        case 171:
            return generate_1.default(clockHistory, height, width);
        // clock.svg
        case 172:
            return generate_1.default(clock, height, width);
        // cloud-download.svg
        case 173:
            return generate_1.default(cloudDownload, height, width);
        // cloud-fill.svg
        case 174:
            return generate_1.default(cloudFill, height, width);
        // cloud-upload.svg
        case 175:
            return generate_1.default(cloudUpload, height, width);
        // cloud.svg
        case 176:
            return generate_1.default(cloud, height, width);
        // code-slash.svg
        case 177:
            return generate_1.default(codeSlash, height, width);
        // code.svg
        case 178:
            return generate_1.default(code, height, width);
        // collection-fill.svg
        case 179:
            return generate_1.default(collectionFill, height, width);
        // collection-play-fill.svg
        case 180:
            return generate_1.default(collectionPlayFill, height, width);
        // collection-play.svg
        case 181:
            return generate_1.default(collectionPlay, height, width);
        // collection.svg
        case 182:
            return generate_1.default(collection, height, width);
        // columns-gap.svg
        case 183:
            return generate_1.default(columnsGap, height, width);
        // columns.svg
        case 184:
            return generate_1.default(columns, height, width);
        // command.svg
        case 185:
            return generate_1.default(command, height, width);
        // compass.svg
        case 186:
            return generate_1.default(compass, height, width);
        // cone-striped.svg
        case 187:
            return generate_1.default(coneStriped, height, width);
        // cone.svg
        case 188:
            return generate_1.default(cone, height, width);
        // controller.svg
        case 189:
            return generate_1.default(controller, height, width);
        // credit-card.svg
        case 190:
            return generate_1.default(creditCard, height, width);
        // crop.svg
        case 191:
            return generate_1.default(crop, height, width);
        // cursor-fill.svg
        case 192:
            return generate_1.default(cursorFill, height, width);
        // cursor-text.svg
        case 193:
            return generate_1.default(cursorText, height, width);
        // cursor.svg
        case 194:
            return generate_1.default(cursor, height, width);
        // dash-circle-fill.svg
        case 195:
            return generate_1.default(dashCircleFill, height, width);
        // dash-circle.svg
        case 196:
            return generate_1.default(dashCircle, height, width);
        // dash-square-fill.svg
        case 197:
            return generate_1.default(dashSquareFill, height, width);
        // dash-square.svg
        case 198:
            return generate_1.default(dashSquare, height, width);
        // dash.svg
        case 199:
            return generate_1.default(dash, height, width);
        // diamond-fill.svg
        case 200:
            return generate_1.default(diamondFill, height, width);
        // diamond-half.svg
        case 201:
            return generate_1.default(diamondHalf, height, width);
        // diamond.svg
        case 202:
            return generate_1.default(diamond, height, width);
        // display-fill.svg
        case 203:
            return generate_1.default(displayFill, height, width);
        // display.svg
        case 204:
            return generate_1.default(display, height, width);
        // dot.svg
        case 205:
            return generate_1.default(dot, height, width);
        // download.svg
        case 206:
            return generate_1.default(download, height, width);
        // droplet-fill.svg
        case 207:
            return generate_1.default(dropletFill, height, width);
        // droplet-half.svg
        case 208:
            return generate_1.default(dropletHalf, height, width);
        // droplet.svg
        case 209:
            return generate_1.default(droplet, height, width);
        // egg-fill.svg
        case 210:
            return generate_1.default(eggFill, height, width);
        // egg-fried.svg
        case 211:
            return generate_1.default(eggFried, height, width);
        // egg.svg
        case 212:
            return generate_1.default(egg, height, width);
        // eject-fill.svg
        case 213:
            return generate_1.default(ejectFill, height, width);
        // eject.svg
        case 214:
            return generate_1.default(eject, height, width);
        // envelope-fill.svg
        case 215:
            return generate_1.default(envelopeFill, height, width);
        // envelope-open-fill.svg
        case 216:
            return generate_1.default(envelopeOpenFill, height, width);
        // envelope-open.svg
        case 217:
            return generate_1.default(envelopeOpen, height, width);
        // envelope.svg
        case 218:
            return generate_1.default(envelope, height, width);
        // exclamation-circle-fill.svg
        case 219:
            return generate_1.default(exclamationCircleFill, height, width);
        // exclamation-circle.svg
        case 220:
            return generate_1.default(exclamationCircle, height, width);
        // exclamation-diamond-fill.svg
        case 221:
            return generate_1.default(exclamationDiamondFill, height, width);
        // exclamation-diamond.svg
        case 222:
            return generate_1.default(exclamationDiamond, height, width);
        // exclamation-octagon-fill.svg
        case 223:
            return generate_1.default(exclamationOctagonFill, height, width);
        // exclamation-octagon.svg
        case 224:
            return generate_1.default(exclamationOctagon, height, width);
        // exclamation-square-fill.svg
        case 225:
            return generate_1.default(exclamationSquareFill, height, width);
        // exclamation-square.svg
        case 226:
            return generate_1.default(exclamationSquare, height, width);
        // exclamation-triangle-fill.svg
        case 227:
            return generate_1.default(exclamationTriangleFill, height, width);
        // exclamation-triangle.svg
        case 228:
            return generate_1.default(exclamationTriangle, height, width);
        // exclamation.svg
        case 229:
            return generate_1.default(exclamation, height, width);
        // exclude.svg
        case 230:
            return generate_1.default(exclude, height, width);
        // eye-fill.svg
        case 231:
            return generate_1.default(eyeFill, height, width);
        // eye-slash-fill.svg
        case 232:
            return generate_1.default(eyeSlashFill, height, width);
        // eye-slash.svg
        case 233:
            return generate_1.default(eyeSlash, height, width);
        // eye.svg
        case 234:
            return generate_1.default(eye, height, width);
        // file-arrow-down.svg
        case 235:
            return generate_1.default(fileArrowDown, height, width);
        // file-arrow-up.svg
        case 236:
            return generate_1.default(fileArrowUp, height, width);
        // file-break.svg
        case 237:
            return generate_1.default(fileBreak, height, width);
        // file-check.svg
        case 238:
            return generate_1.default(fileCheck, height, width);
        // file-code.svg
        case 239:
            return generate_1.default(fileCode, height, width);
        // file-diff.svg
        case 240:
            return generate_1.default(fileDiff, height, width);
        // file-earmark-arrow-down.svg
        case 241:
            return generate_1.default(fileEarmarkArrowDown, height, width);
        // file-earmark-arrow-up.svg
        case 242:
            return generate_1.default(fileEarmarkArrowUp, height, width);
        // file-earmark-break.svg
        case 243:
            return generate_1.default(fileEarmarkBreak, height, width);
        // file-earmark-check.svg
        case 244:
            return generate_1.default(fileEarmarkCheck, height, width);
        // file-earmark-code.svg
        case 245:
            return generate_1.default(fileEarmarkCode, height, width);
        // file-earmark-diff.svg
        case 246:
            return generate_1.default(fileEarmarkDiff, height, width);
        // file-earmark-minus.svg
        case 247:
            return generate_1.default(fileEarmarkMinus, height, width);
        // file-earmark-plus.svg
        case 248:
            return generate_1.default(fileEarmarkPlus, height, width);
        // file-earmark-ruled.svg
        case 249:
            return generate_1.default(fileEarmarkRuled, height, width);
        // file-earmark-spreadsheet.svg
        case 250:
            return generate_1.default(fileEarmarkSpreadsheet, height, width);
        // file-earmark-text.svg
        case 251:
            return generate_1.default(fileEarmarkText, height, width);
        // file-earmark-zip.svg
        case 252:
            return generate_1.default(fileEarmarkZip, height, width);
        // file-earmark.svg
        case 253:
            return generate_1.default(fileEarmark, height, width);
        // file-minus.svg
        case 254:
            return generate_1.default(fileMinus, height, width);
        // file-plus.svg
        case 255:
            return generate_1.default(filePlus, height, width);
        // file-post.svg
        case 256:
            return generate_1.default(filePost, height, width);
        // file-richtext.svg
        case 257:
            return generate_1.default(fileRichtext, height, width);
        // file-ruled.svg
        case 258:
            return generate_1.default(fileRuled, height, width);
        // file-spreadsheet.svg
        case 259:
            return generate_1.default(fileSpreadsheet, height, width);
        // file-text.svg
        case 260:
            return generate_1.default(fileText, height, width);
        // file-zip.svg
        case 261:
            return generate_1.default(fileZip, height, width);
        // file.svg
        case 262:
            return generate_1.default(file, height, width);
        // files-alt.svg
        case 263:
            return generate_1.default(filesAlt, height, width);
        // files.svg
        case 264:
            return generate_1.default(files, height, width);
        // film.svg
        case 265:
            return generate_1.default(film, height, width);
        // filter-left.svg
        case 266:
            return generate_1.default(filterLeft, height, width);
        // filter-right.svg
        case 267:
            return generate_1.default(filterRight, height, width);
        // filter.svg
        case 268:
            return generate_1.default(filter, height, width);
        // flag-fill.svg
        case 269:
            return generate_1.default(flagFill, height, width);
        // flag.svg
        case 270:
            return generate_1.default(flag, height, width);
        // folder-check.svg
        case 271:
            return generate_1.default(folderCheck, height, width);
        // folder-fill.svg
        case 272:
            return generate_1.default(folderFill, height, width);
        // folder-minus.svg
        case 273:
            return generate_1.default(folderMinus, height, width);
        // folder-plus.svg
        case 274:
            return generate_1.default(folderPlus, height, width);
        // folder-symlink-fill.svg
        case 275:
            return generate_1.default(folderSymlinkFill, height, width);
        // folder-symlink.svg
        case 276:
            return generate_1.default(folderSymlink, height, width);
        // folder.svg
        case 277:
            return generate_1.default(folder, height, width);
        // fonts.svg
        case 278:
            return generate_1.default(fonts, height, width);
        // forward-fill.svg
        case 279:
            return generate_1.default(forwardFill, height, width);
        // forward.svg
        case 280:
            return generate_1.default(forward, height, width);
        // fullscreen-exit.svg
        case 281:
            return generate_1.default(fullscreenExit, height, width);
        // fullscreen.svg
        case 282:
            return generate_1.default(fullscreen, height, width);
        // funnel-fill.svg
        case 283:
            return generate_1.default(funnelFill, height, width);
        // funnel.svg
        case 284:
            return generate_1.default(funnel, height, width);
        // gear-fill.svg
        case 285:
            return generate_1.default(gearFill, height, width);
        // gear-wide-connected.svg
        case 286:
            return generate_1.default(gearWideConnected, height, width);
        // gear-wide.svg
        case 287:
            return generate_1.default(gearWide, height, width);
        // gear.svg
        case 288:
            return generate_1.default(gear, height, width);
        // gem.svg
        case 289:
            return generate_1.default(gem, height, width);
        // geo-alt.svg
        case 290:
            return generate_1.default(geoAlt, height, width);
        // geo.svg
        case 291:
            return generate_1.default(geo, height, width);
        // gift-fill.svg
        case 292:
            return generate_1.default(giftFill, height, width);
        // gift.svg
        case 293:
            return generate_1.default(gift, height, width);
        // graph-down.svg
        case 294:
            return generate_1.default(graphDown, height, width);
        // graph-up.svg
        case 295:
            return generate_1.default(graphUp, height, width);
        // grid-1x2-fill.svg
        case 296:
            return generate_1.default(grid1x2Fill, height, width);
        // grid-1x2.svg
        case 297:
            return generate_1.default(grid1x2, height, width);
        // grid-3x2-gap-fill.svg
        case 298:
            return generate_1.default(grid3x2GapFill, height, width);
        // grid-3x2-gap.svg
        case 299:
            return generate_1.default(grid3x2Gap, height, width);
        // grid-3x2.svg
        case 300:
            return generate_1.default(grid3x2, height, width);
        // grid-3x3-gap-fill.svg
        case 301:
            return generate_1.default(grid3x3GapFill, height, width);
        // grid-3x3-gap.svg
        case 302:
            return generate_1.default(grid3x3Gap, height, width);
        // grid-3x3.svg
        case 303:
            return generate_1.default(grid3x3, height, width);
        // grid-fill.svg
        case 304:
            return generate_1.default(gridFill, height, width);
        // grid.svg
        case 305:
            return generate_1.default(grid, height, width);
        // hammer.svg
        case 306:
            return generate_1.default(hammer, height, width);
        // hash.svg
        case 307:
            return generate_1.default(hash, height, width);
        // heart-fill.svg
        case 308:
            return generate_1.default(heartFill, height, width);
        // heart-half.svg
        case 309:
            return generate_1.default(heartHalf, height, width);
        // heart.svg
        case 310:
            return generate_1.default(heart, height, width);
        // house-door-fill.svg
        case 311:
            return generate_1.default(houseDoorFill, height, width);
        // house-door.svg
        case 312:
            return generate_1.default(houseDoor, height, width);
        // house-fill.svg
        case 313:
            return generate_1.default(houseFill, height, width);
        // house.svg
        case 314:
            return generate_1.default(house, height, width);
        // hr.svg
        case 315:
            return generate_1.default(hr, height, width);
        // image-alt.svg
        case 316:
            return generate_1.default(imageAlt, height, width);
        // image-fill.svg
        case 317:
            return generate_1.default(imageFill, height, width);
        // image.svg
        case 318:
            return generate_1.default(image, height, width);
        // images.svg
        case 319:
            return generate_1.default(images, height, width);
        // inbox-fill.svg
        case 320:
            return generate_1.default(inboxFill, height, width);
        // inbox.svg
        case 321:
            return generate_1.default(inbox, height, width);
        // inboxes-fill.svg
        case 322:
            return generate_1.default(inboxesFill, height, width);
        // inboxes.svg
        case 323:
            return generate_1.default(inboxes, height, width);
        // info-circle-fill.svg
        case 324:
            return generate_1.default(infoCircleFill, height, width);
        // info-circle.svg
        case 325:
            return generate_1.default(infoCircle, height, width);
        // info-square-fill.svg
        case 326:
            return generate_1.default(infoSquareFill, height, width);
        // info-square.svg
        case 327:
            return generate_1.default(infoSquare, height, width);
        // info.svg
        case 328:
            return generate_1.default(info, height, width);
        // intersect.svg
        case 329:
            return generate_1.default(intersect, height, width);
        // justify-left.svg
        case 330:
            return generate_1.default(justifyLeft, height, width);
        // justify-right.svg
        case 331:
            return generate_1.default(justifyRight, height, width);
        // justify.svg
        case 332:
            return generate_1.default(justify, height, width);
        // kanban-fill.svg
        case 333:
            return generate_1.default(kanbanFill, height, width);
        // kanban.svg
        case 334:
            return generate_1.default(kanban, height, width);
        // laptop.svg
        case 335:
            return generate_1.default(laptop, height, width);
        // layers-fill.svg
        case 336:
            return generate_1.default(layersFill, height, width);
        // layers-half.svg
        case 337:
            return generate_1.default(layersHalf, height, width);
        // layers.svg
        case 338:
            return generate_1.default(layers, height, width);
        // layout-sidebar-inset-reverse.svg
        case 339:
            return generate_1.default(layoutSidebarInsetReverse, height, width);
        // layout-sidebar-inset.svg
        case 340:
            return generate_1.default(layoutSidebarInset, height, width);
        // layout-sidebar-reverse.svg
        case 341:
            return generate_1.default(layoutSidebarReverse, height, width);
        // layout-sidebar.svg
        case 342:
            return generate_1.default(layoutSidebar, height, width);
        // layout-split.svg
        case 343:
            return generate_1.default(layoutSplit, height, width);
        // layout-text-sidebar-reverse.svg
        case 344:
            return generate_1.default(layoutTextSidebarReverse, height, width);
        // layout-text-sidebar.svg
        case 345:
            return generate_1.default(layoutTextSidebar, height, width);
        // layout-text-window-reverse.svg
        case 346:
            return generate_1.default(layoutTextWindowReverse, height, width);
        // layout-text-window.svg
        case 347:
            return generate_1.default(layoutTextWindow, height, width);
        // layout-three-columns.svg
        case 348:
            return generate_1.default(layoutThreeColumns, height, width);
        // layout-wtf.svg
        case 349:
            return generate_1.default(layoutWtf, height, width);
        // life-preserver.svg
        case 350:
            return generate_1.default(lifePreserver, height, width);
        // lightning-fill.svg
        case 351:
            return generate_1.default(lightningFill, height, width);
        // lightning.svg
        case 352:
            return generate_1.default(lightning, height, width);
        // link-45deg.svg
        case 353:
            return generate_1.default(link45deg, height, width);
        // link.svg
        case 354:
            return generate_1.default(link, height, width);
        // list-check.svg
        case 355:
            return generate_1.default(listCheck, height, width);
        // list-nested.svg
        case 356:
            return generate_1.default(listNested, height, width);
        // list-ol.svg
        case 357:
            return generate_1.default(listOl, height, width);
        // list-task.svg
        case 358:
            return generate_1.default(listTask, height, width);
        // list-ul.svg
        case 359:
            return generate_1.default(listUl, height, width);
        // list.svg
        case 360:
            return generate_1.default(list, height, width);
        // lock-fill.svg
        case 361:
            return generate_1.default(lockFill, height, width);
        // lock.svg
        case 362:
            return generate_1.default(lock, height, width);
        // map.svg
        case 363:
            return generate_1.default(map, height, width);
        // mic-fill.svg
        case 364:
            return generate_1.default(micFill, height, width);
        // mic-mute-fill.svg
        case 365:
            return generate_1.default(micMuteFill, height, width);
        // mic-mute.svg
        case 366:
            return generate_1.default(micMute, height, width);
        // mic.svg
        case 367:
            return generate_1.default(mic, height, width);
        // moon.svg
        case 368:
            return generate_1.default(moon, height, width);
        // music-note-beamed.svg
        case 369:
            return generate_1.default(musicNoteBeamed, height, width);
        // music-note-list.svg
        case 370:
            return generate_1.default(musicNoteList, height, width);
        // music-note.svg
        case 371:
            return generate_1.default(musicNote, height, width);
        // music-player-fill.svg
        case 372:
            return generate_1.default(musicPlayerFill, height, width);
        // music-player.svg
        case 373:
            return generate_1.default(musicPlayer, height, width);
        // newspaper.svg
        case 374:
            return generate_1.default(newspaper, height, width);
        // octagon-fill.svg
        case 375:
            return generate_1.default(octagonFill, height, width);
        // octagon-half.svg
        case 376:
            return generate_1.default(octagonHalf, height, width);
        // octagon.svg
        case 377:
            return generate_1.default(octagon, height, width);
        // option.svg
        case 378:
            return generate_1.default(option, height, width);
        // outlet.svg
        case 379:
            return generate_1.default(outlet, height, width);
        // paperclip.svg
        case 380:
            return generate_1.default(paperclip, height, width);
        // pause-fill.svg
        case 381:
            return generate_1.default(pauseFill, height, width);
        // pause.svg
        case 382:
            return generate_1.default(pause, height, width);
        // pen.svg
        case 383:
            return generate_1.default(pen, height, width);
        // pencil-square.svg
        case 384:
            return generate_1.default(pencilSquare, height, width);
        // pencil.svg
        case 385:
            return generate_1.default(pencil, height, width);
        // pentagon-fill.svg
        case 386:
            return generate_1.default(pentagonFill, height, width);
        // pentagon-half.svg
        case 387:
            return generate_1.default(pentagonHalf, height, width);
        // pentagon.svg
        case 388:
            return generate_1.default(pentagon, height, width);
        // people-circle.svg
        case 389:
            return generate_1.default(peopleCircle, height, width);
        // people-fill.svg
        case 390:
            return generate_1.default(peopleFill, height, width);
        // people.svg
        case 391:
            return generate_1.default(people, height, width);
        // person-bounding-box.svg
        case 392:
            return generate_1.default(personBoundingBox, height, width);
        // person-check-fill.svg
        case 393:
            return generate_1.default(personCheckFill, height, width);
        // person-check.svg
        case 394:
            return generate_1.default(personCheck, height, width);
        // person-dash-fill.svg
        case 395:
            return generate_1.default(personDashFill, height, width);
        // person-dash.svg
        case 396:
            return generate_1.default(personDash, height, width);
        // person-fill.svg
        case 397:
            return generate_1.default(personFill, height, width);
        // person-lines-fill.svg
        case 398:
            return generate_1.default(personLinesFill, height, width);
        // person-plus-fill.svg
        case 399:
            return generate_1.default(personPlusFill, height, width);
        // person-plus.svg
        case 400:
            return generate_1.default(personPlus, height, width);
        // person-square.svg
        case 401:
            return generate_1.default(personSquare, height, width);
        // person.svg
        case 402:
            return generate_1.default(person, height, width);
        // phone-landscape.svg
        case 403:
            return generate_1.default(phoneLandscape, height, width);
        // phone.svg
        case 404:
            return generate_1.default(phone, height, width);
        // pie-chart-fill.svg
        case 405:
            return generate_1.default(pieChartFill, height, width);
        // pie-chart.svg
        case 406:
            return generate_1.default(pieChart, height, width);
        // pip-fill.svg
        case 407:
            return generate_1.default(pipFill, height, width);
        // pip.svg
        case 408:
            return generate_1.default(pip, height, width);
        // play-fill.svg
        case 409:
            return generate_1.default(playFill, height, width);
        // play.svg
        case 410:
            return generate_1.default(play, height, width);
        // plug.svg
        case 411:
            return generate_1.default(plug, height, width);
        // plus-circle-fill.svg
        case 412:
            return generate_1.default(plusCircleFill, height, width);
        // plus-circle.svg
        case 413:
            return generate_1.default(plusCircle, height, width);
        // plus-square-fill.svg
        case 414:
            return generate_1.default(plusSquareFill, height, width);
        // plus-square.svg
        case 415:
            return generate_1.default(plusSquare, height, width);
        // plus.svg
        case 416:
            return generate_1.default(plus, height, width);
        // power.svg
        case 417:
            return generate_1.default(power, height, width);
        // puzzle-fill.svg
        case 418:
            return generate_1.default(puzzleFill, height, width);
        // puzzle.svg
        case 419:
            return generate_1.default(puzzle, height, width);
        // question-circle-fill.svg
        case 420:
            return generate_1.default(questionCircleFill, height, width);
        // question-circle.svg
        case 421:
            return generate_1.default(questionCircle, height, width);
        // question-diamond-fill.svg
        case 422:
            return generate_1.default(questionDiamondFill, height, width);
        // question-diamond.svg
        case 423:
            return generate_1.default(questionDiamond, height, width);
        // question-octagon-fill.svg
        case 424:
            return generate_1.default(questionOctagonFill, height, width);
        // question-octagon.svg
        case 425:
            return generate_1.default(questionOctagon, height, width);
        // question-square-fill.svg
        case 426:
            return generate_1.default(questionSquareFill, height, width);
        // question-square.svg
        case 427:
            return generate_1.default(questionSquare, height, width);
        // question.svg
        case 428:
            return generate_1.default(question, height, width);
        // reply-all-fill.svg
        case 429:
            return generate_1.default(replyAllFill, height, width);
        // reply-all.svg
        case 430:
            return generate_1.default(replyAll, height, width);
        // reply-fill.svg
        case 431:
            return generate_1.default(replyFill, height, width);
        // reply.svg
        case 432:
            return generate_1.default(reply, height, width);
        // screwdriver.svg
        case 433:
            return generate_1.default(screwdriver, height, width);
        // search.svg
        case 434:
            return generate_1.default(search, height, width);
        // server.svg
        case 435:
            return generate_1.default(server, height, width);
        // shield-fill.svg
        case 436:
            return generate_1.default(shieldFill, height, width);
        // shield-lock-fill.svg
        case 437:
            return generate_1.default(shieldLockFill, height, width);
        // shield-lock.svg
        case 438:
            return generate_1.default(shieldLock, height, width);
        // shield-shaded.svg
        case 439:
            return generate_1.default(shieldShaded, height, width);
        // shield.svg
        case 440:
            return generate_1.default(shield, height, width);
        // shift-fill.svg
        case 441:
            return generate_1.default(shiftFill, height, width);
        // shift.svg
        case 442:
            return generate_1.default(shift, height, width);
        // shuffle.svg
        case 443:
            return generate_1.default(shuffle, height, width);
        // skip-backward-fill.svg
        case 444:
            return generate_1.default(skipBackwardFill, height, width);
        // skip-backward.svg
        case 445:
            return generate_1.default(skipBackward, height, width);
        // skip-end-fill.svg
        case 446:
            return generate_1.default(skipEndFill, height, width);
        // skip-end.svg
        case 447:
            return generate_1.default(skipEnd, height, width);
        // skip-forward-fill.svg
        case 448:
            return generate_1.default(skipForwardFill, height, width);
        // skip-forward.svg
        case 449:
            return generate_1.default(skipForward, height, width);
        // skip-start-fill.svg
        case 450:
            return generate_1.default(skipStartFill, height, width);
        // skip-start.svg
        case 451:
            return generate_1.default(skipStart, height, width);
        // slash-circle-fill.svg
        case 452:
            return generate_1.default(slashCircleFill, height, width);
        // slash-circle.svg
        case 453:
            return generate_1.default(slashCircle, height, width);
        // slash-square-fill.svg
        case 454:
            return generate_1.default(slashSquareFill, height, width);
        // slash-square.svg
        case 455:
            return generate_1.default(slashSquare, height, width);
        // slash.svg
        case 456:
            return generate_1.default(slash, height, width);
        // sliders.svg
        case 457:
            return generate_1.default(sliders, height, width);
        // soundwave.svg
        case 458:
            return generate_1.default(soundwave, height, width);
        // speaker.svg
        case 459:
            return generate_1.default(speaker, height, width);
        // square-fill.svg
        case 460:
            return generate_1.default(squareFill, height, width);
        // square-half.svg
        case 461:
            return generate_1.default(squareHalf, height, width);
        // square.svg
        case 462:
            return generate_1.default(square, height, width);
        // star-fill.svg
        case 463:
            return generate_1.default(starFill, height, width);
        // star-half.svg
        case 464:
            return generate_1.default(starHalf, height, width);
        // star.svg
        case 465:
            return generate_1.default(star, height, width);
        // stop-fill.svg
        case 466:
            return generate_1.default(stopFill, height, width);
        // stop.svg
        case 467:
            return generate_1.default(stop, height, width);
        // stopwatch-fill.svg
        case 468:
            return generate_1.default(stopwatchFill, height, width);
        // stopwatch.svg
        case 469:
            return generate_1.default(stopwatch, height, width);
        // subtract.svg
        case 470:
            return generate_1.default(subtract, height, width);
        // sun.svg
        case 471:
            return generate_1.default(sun, height, width);
        // table.svg
        case 472:
            return generate_1.default(table, height, width);
        // tablet-landscape.svg
        case 473:
            return generate_1.default(tabletLandscape, height, width);
        // tablet.svg
        case 474:
            return generate_1.default(tablet, height, width);
        // tag-fill.svg
        case 475:
            return generate_1.default(tagFill, height, width);
        // tag.svg
        case 476:
            return generate_1.default(tag, height, width);
        // terminal-fill.svg
        case 477:
            return generate_1.default(terminalFill, height, width);
        // terminal.svg
        case 478:
            return generate_1.default(terminal, height, width);
        // text-center.svg
        case 479:
            return generate_1.default(textCenter, height, width);
        // text-indent-left.svg
        case 480:
            return generate_1.default(textIndentLeft, height, width);
        // text-indent-right.svg
        case 481:
            return generate_1.default(textIndentRight, height, width);
        // text-left.svg
        case 482:
            return generate_1.default(textLeft, height, width);
        // text-right.svg
        case 483:
            return generate_1.default(textRight, height, width);
        // textarea-t.svg
        case 484:
            return generate_1.default(textareaT, height, width);
        // textarea.svg
        case 485:
            return generate_1.default(textarea, height, width);
        // three-dots-vertical.svg
        case 486:
            return generate_1.default(threeDotsVertical, height, width);
        // three-dots.svg
        case 487:
            return generate_1.default(threeDots, height, width);
        // toggle-off.svg
        case 488:
            return generate_1.default(toggleOff, height, width);
        // toggle-on.svg
        case 489:
            return generate_1.default(toggleOn, height, width);
        // toggles.svg
        case 490:
            return generate_1.default(toggles, height, width);
        // tools.svg
        case 491:
            return generate_1.default(tools, height, width);
        // trash-fill.svg
        case 492:
            return generate_1.default(trashFill, height, width);
        // trash.svg
        case 493:
            return generate_1.default(trash, height, width);
        // trash2-fill.svg
        case 494:
            return generate_1.default(trash2Fill, height, width);
        // trash2.svg
        case 495:
            return generate_1.default(trash2, height, width);
        // triangle-fill.svg
        case 496:
            return generate_1.default(triangleFill, height, width);
        // triangle-half.svg
        case 497:
            return generate_1.default(triangleHalf, height, width);
        // triangle.svg
        case 498:
            return generate_1.default(triangle, height, width);
        // trophy.svg
        case 499:
            return generate_1.default(trophy, height, width);
        // tv-fill.svg
        case 500:
            return generate_1.default(tvFill, height, width);
        // tv.svg
        case 501:
            return generate_1.default(tv, height, width);
        // type-bold.svg
        case 502:
            return generate_1.default(typeBold, height, width);
        // type-h1.svg
        case 503:
            return generate_1.default(typeH1, height, width);
        // type-h2.svg
        case 504:
            return generate_1.default(typeH2, height, width);
        // type-h3.svg
        case 505:
            return generate_1.default(typeH3, height, width);
        // type-italic.svg
        case 506:
            return generate_1.default(typeItalic, height, width);
        // type-strikethrough.svg
        case 507:
            return generate_1.default(typeStrikethrough, height, width);
        // type-underline.svg
        case 508:
            return generate_1.default(typeUnderline, height, width);
        // type.svg
        case 509:
            return generate_1.default(type, height, width);
        // union.svg
        case 510:
            return generate_1.default(union, height, width);
        // unlock-fill.svg
        case 511:
            return generate_1.default(unlockFill, height, width);
        // unlock.svg
        case 512:
            return generate_1.default(unlock, height, width);
        // upload.svg
        case 513:
            return generate_1.default(upload, height, width);
        // view-list.svg
        case 514:
            return generate_1.default(viewList, height, width);
        // view-stacked.svg
        case 515:
            return generate_1.default(viewStacked, height, width);
        // volume-down-fill.svg
        case 516:
            return generate_1.default(volumeDownFill, height, width);
        // volume-down.svg
        case 517:
            return generate_1.default(volumeDown, height, width);
        // volume-mute-fill.svg
        case 518:
            return generate_1.default(volumeMuteFill, height, width);
        // volume-mute.svg
        case 519:
            return generate_1.default(volumeMute, height, width);
        // volume-up-fill.svg
        case 520:
            return generate_1.default(volumeUpFill, height, width);
        // volume-up.svg
        case 521:
            return generate_1.default(volumeUp, height, width);
        // vr.svg
        case 522:
            return generate_1.default(vr, height, width);
        // wallet.svg
        case 523:
            return generate_1.default(wallet, height, width);
        // watch.svg
        case 524:
            return generate_1.default(watch, height, width);
        // wifi.svg
        case 525:
            return generate_1.default(wifi, height, width);
        // window.svg
        case 526:
            return generate_1.default(window, height, width);
        // wrench.svg
        case 527:
            return generate_1.default(wrench, height, width);
        // x-circle-fill.svg
        case 528:
            return generate_1.default(xCircleFill, height, width);
        // x-circle.svg
        case 529:
            return generate_1.default(xCircle, height, width);
        // x-diamond-fill.svg
        case 530:
            return generate_1.default(xDiamondFill, height, width);
        // x-diamond.svg
        case 531:
            return generate_1.default(xDiamond, height, width);
        // x-octagon-fill.svg
        case 532:
            return generate_1.default(xOctagonFill, height, width);
        // x-octagon.svg
        case 533:
            return generate_1.default(xOctagon, height, width);
        // x-square-fill.svg
        case 534:
            return generate_1.default(xSquareFill, height, width);
        // x-square.svg
        case 535:
            return generate_1.default(xSquare, height, width);
        // x.svg
        case 536:
            return generate_1.default(x, height, width);
    }
};
