function isTabOpn(tabsList, tabName) {
  var isOpen = tabsList.find(function (curTab) {
    return tabName == curTab.tabName;
  });
  if (!isOpen) return !1;
  return !0;
}
export { isTabOpn };
export const schema_name = "genoma-1";
