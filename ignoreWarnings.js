
export default function ignoreWarning(yellowBox) {
  yellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader',
    'Class RCTCxxModule was not exported.',
    'Module RNNeteaseIm',
    'Remote debugger is in a background tab which',
  ]);
}
