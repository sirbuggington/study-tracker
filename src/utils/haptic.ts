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
    // Android / Chrome — single strong vibration
    navigator.vibrate(50);
  } else {
    // iOS 18+ — proxy click through label to fire Taptic Engine
    ensureSwitchElement().click();
  }
}
