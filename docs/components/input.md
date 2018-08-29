# Input component

It is defined as an input component, an element that is input data to be used in a form, such as an own `<input>`, for the other elements of data input the same component is used but with a variation of class for `<textarea>`, `<select>` and `<input type= "radio">`, `<input type="checkbox">`. We can see here an example of a form using these components:


## Generic examples

A simple form composed of different elements and components with variations.

<div class="c-code">
  <div class="c-input">
    <label class="c-input__label" for="input">Input label</label>
    <input class="c-input__field" type="text" id="input" placeholder="Input placeholder">
  </div>
  <div class="c-input c-input--textarea">
    <label class="c-input__label" for="input03">Textarea label</label>
    <textarea class="c-input__field" id="input03" placeholder="Textarea placeholder"></textarea>
  </div>
  <div class="c-input c-input--select">
    <label class="c-input__label" for="input04">Select label</label>
    <select class="c-input__field" id="input04">
      <option>Select option 1</option>
      <option>Select option 2</option>
      <option>Select option 3</option>
      <option>Select option 4</option>
      <option>Select option 5</option>
    </select>
  </div>
  <button type="submit" class="c-button">Submit</button>
</div>
      
```
<div class="c-input">
  <label class="c-input__label" for="input">Input label</label>
  <input class="c-input__field" type="text" id="input" placeholder="Input placeholder">
</div>
<div class="c-input c-input--textarea">
  <label class="c-input__label" for="input03">Textarea label</label>
  <textarea class="c-input__field" id="input03" placeholder="Textarea placeholder"></textarea>
</div>
<div class="c-input c-input--select">
  <label class="c-input__label" for="input04">Select label</label>
  <select class="c-input__field" id="input04">
    <option>Select option 1</option>
    <option>Select option 2</option>
    <option>Select option 3</option>
    <option>Select option 4</option>
    <option>Select option 5</option>
  </select>
</div>
<button type="submit" class="c-button">Submit</button>
```

### Input

<div class="c-code">
  <div class="c-input">
    <label class="c-input__label" for="input">Input label</label>
    <input class="c-input__field" type="text" id="input" placeholder="Input placeholder">
  </div>
</div>

```
<div class="c-input">
  <label class="c-input__label" for="input">Input label</label>
  <input class="c-input__field" type="text" id="input" placeholder="Input placeholder">
</div>
```

### Textarea
<div class="c-code">
  <div class="c-input c-input--textarea">
    <label class="c-input__label" for="input03">Textarea label</label>
    <textarea class="c-input__field" id="input03" placeholder="Textarea placeholder"></textarea>
  </div>
</div>
```
<div class="c-input c-input--textarea">
  <label class="c-input__label" for="input03">Textarea label</label>
  <textarea class="c-input__field" id="input03" placeholder="Textarea placeholder"></textarea>
</div>
```

### Select

<div class="c-code">
  <div class="c-input c-input--select">
    <label class="c-input__label" for="input04">Select label</label>
    <select class="c-input__field" id="input04">
      <option>Select option 1</option>
      <option>Select option 2</option>
      <option>Select option 3</option>
      <option>Select option 4</option>
      <option>Select option 5</option>
    </select>
  </div>
</div>
```
<div class="c-input c-input--select">
  <label class="c-input__label" for="input04">Select label</label>
  <select class="c-input__field" id="input04">
    <option>Select option 1</option>
    <option>Select option 2</option>
    <option>Select option 3</option>
    <option>Select option 4</option>
    <option>Select option 5</option>
  </select>
</div>
```



