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

---

Feature: When user clicks a layer, the layer information is displayed in the inpector panel

- create a temp < p > component in inspector panel
- create some function that breaks down the layer object into html elements
- need click handler on layer
- need a way to add or remove components based on what's selected

---

Observer pattern: The Observer called "subject" maintains a list of dependencies called "observers", and automatically notifies them of any change of state, usually calling one of it's methods.

Subject Class Methods
attach: so observers can register and recieve notifications when data is updated
detach: so observers can unsubscribe when they dont want any notifications (like if a component is unmounted. We no longer need references in memeory causing memory leaks)
notify: will notify registered observers whenever the data changes.

In Subject
Set observers as an array
attach will push observer into array
detach will filter(remove)from array
create function that will notify observers
create function that will use notify method at fixed intervals (like every second)

In Observer component
import Subject class
useState to store state
arrow function to call the setState function in useState
useEffect onMount to call subject "attach" method with arrow function as argument
on unmount (return line) called detach with same argument
return jsx with state <- renders the html with the current state

Subject: Layer
Observers: Layer list, Inspector panel, Viewport

Make a LayerSubject class
-observers array <- observers are just a list of callback functions from components
-attach method that pushes observer argument into observers array
-detach methos that uses filter to remove observer argument from observers array
-notify methood that uses forEach to iterate through the array of observers
-updateLayer (notify) method that notifys observer when there's a change to the layer data. The notification is a function made in the Observer component that sets the state of the component.
