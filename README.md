<h1 align="center">
	Snap Layout
</h1>
<p align="center">
  <img src="./docs/show.gif" alt="show"><br>
</p>

Snap Layout module for PWA's.

Note: It's not possible to resize a window or tab that wasn't created by `window.open()` or isn't a PWA. It's also not possible to resize when the window has multiple tabs.

This module uses `rem` for sizing, so to change the size of the module simply change the font size of the parent component.

## Functions:
```jsx
import SnapLayout from 'snap-layout'

<SnapLayout hide={true} fill="grey" size="2rem">
```
- `hide` - boolean, hides the menu
- `fill` - CSS Color to use for the icon color
- `size` - CSS Size to use for the icon size
