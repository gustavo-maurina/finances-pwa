export function isIos(): boolean {
  console.log(navigator);
  return /iPhone|iPad|iPod/.test(navigator.userAgent);
}

export function isInStandaloneMode() {
  const newNavigator = window.navigator as any;

  return "standalone" in window.navigator && newNavigator.standalone;
}
