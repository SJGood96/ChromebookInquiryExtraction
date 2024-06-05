//@OnlyCurrentDoc

function onOpen() {
 SpreadsheetApp.getUi().createMenu("Data entry").addItem("Student/Parent Inquiry", "showSidebar").addToUi();
}

function showSidebar() {
 SpreadsheetApp.getUi().showSidebar(HtmlService.createHtmlOutputFromFile("Sidebar.html").setTitle("Enter data"));
}
