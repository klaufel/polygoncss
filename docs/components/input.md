
# Input component
## Generic examples

Se define como un componente input, un elemento que sea de entrada de datos para ser utilizados en un formulario, como pueda ser un propio < input >, para el resto de elementos de entrada de datos se utiliza el mismo componente pero con una variacion para < textarea >, < select >, y < input type="radio" >, < input type="checkbox" >. Podemos ver aquí un ejemplo de un formulario utilizando estos componentes:

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

      
```html
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