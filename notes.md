HTML structure:

- Div: tools panel
- Div: Layers panel
- Div: Viewport
- Div: Inspector panel

UI Components:
Panels:

- Layers panel
- Inspector panel
- Tools panel

Panels elements (shared)

- Tabs
- Rows
- Grid

Inspector Panel Elements

- Tabs:
  - States: name, order, normal, hover, clicked, active
  - Hook logic: get selected object info
  - Implementation logic: Change state
- Rows: States: none
- Thumbnail Grid: none

Layer Panel Elements

- Rows: normal, hover, clicked, active,

Tools Button

- add layer button: name, normal, hover, clicked
- delete layer button: name, normal, hover, clicked

Inspector inputs

- Text inputs: empty, normal, hover, clicked, active
- Radio inputs: normal, hover, clicked, active
- Thumbnails: normal, hover, clicked, active, preview, error

Inspector button

- CTA button: name, normal, hover, cliked, active

Layer inputs

- Layer row button (eg. changes inspector when clicked): name, normal, hover, cliked, active
- Layer row rename button: normal, hover, clicked

Viewport

- Canvas view: normal, active
- Upload files view: normal, files hovering, uploading
- Preview export view (optional): rotating combinations

1. Create Basic HTML structure
2. Define style & colors
3. Create basic form of all UI components (renders HTML) (minus states)
4. Create custom Hooks and Feature Functions; add to components
5. Refine components presentation

New Layer btn

User hits New layer:

- New Layer component added to bottom of Rows (above new layer btn)
  - Layer in active state
  - addComponent(component, parent, id(optional))
  - removeComponent(component, parent, id(optional))
- Layer Object created; Added to Layers Array
- Inspector panel changes to Layers Tab
- Layers tab displays Layer Object info
  - Layer name
  - Number of files (if any)
  - Layer width/height/x/y
- Viewport changes to file upload component
  - Empty state

_Presentation logic:_

- no changes

_Business logic:_ Creates a layer object; Added to Layers Array
_Implementation logic:_

conditionally returns JSX based on (element info, state, onClick). Using Implementation Hook state it changes button state style and button name to filename. useImagePreview is used in another Component PreviewImage. JSX with correct image gets rendered.

_Implementation logic:_ useLayerName(), useImagePreview() Sets state using Business logic functions. Returns object with callback functions and state value. For Presentation logic to use.
