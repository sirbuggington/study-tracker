let _label: HTMLLabelElement | null = null;

function ensureSwitchElement(): HTMLLabelElement {
  if (_label) return _label;

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.setAttribute('switch', ''); // iOS 18+ non-standard attribute for Taptic Engine
  input.id = '__haptic_switch__';
  input.style.cssText = 'position:absolute;opacity:0;pointer-events:none;width:0;height:0;';

  _label = document.createElement('label');
  _label.htmlFor = '__haptic_switch__';
  _label.style.cssText = 'position:absolute;opacity:0;pointer-events:none;width:0;height:0;';

  document.body.appendChild(input);
  document.body.appendChild(_label);
  return _label;
}

export function triggerHaptic(): void {
  if (navigator.vibrate) {
    // Android / Chrome — burst pattern: vibrate-pause-vibrate for a stronger thump
    navigator.vibrate([30, 10, 30]);
  } else {
    // iOS 18+ — rapid-fire the switch to stack multiple haptic taps
    const label = ensureSwitchElement();
    label.click();
    setTimeout(() => label.click(), 15);
    setTimeout(() => label.click(), 30);
  }
}
