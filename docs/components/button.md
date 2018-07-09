# Button component

Generalmente se van a utilizar con 

Button styles can be applied to any element. Typically you'll want to use either a `<a>`, `<button`, `<input>` element:

## Examples

Un simple botón realizado de múltiples formas.


<div class="c-code">
  <a class="c-button" href="#">Anchor</a>
  <a class="c-button" href="#" role="button">Anchor button</a>
  <button class="c-button" type="submit">Button</button>
  <input class="c-button" type="button" value="Input">
  <input class="c-button" type="submit" value="Submit">
  <input class="c-button" type="reset" value="Reset">
</div>

```
<a class="c-button" href="#">Anchor</a>
<a class="c-button" href="#" role="button">Anchor button</a>
<button class="c-button" type="submit">Button</button>
<input class="c-button" type="button" value="Input">
<input class="c-button" type="submit" value="Submit">
<input class="c-button" type="reset" value="Reset">
```

Puedes hacer tus botones inactivos añadiendo la clase `"is-disabled"` a los elementos `<a>` y añadir el atributo boleano `disabled` para los elementos que lo soporten tipo `<button>` y `<input>`. Puedes utilizar los dos métodos.

<div class="c-code">
  <a class="c-button is-disabled" href="#" role="button">Anchor</a>
  <a class="c-button is-disabled" href="#" role="button">Anchor button</a>
  <button class="c-button is-disabled" type="submit" disabled>Button</button>
  <input class="c-button is-disabled" type="button" value="Input" disabled>
  <input class="c-button is-disabled" type="submit" value="Submit" disabled>
  <input class="c-button is-disabled" type="reset" value="Reset" disabled>
</div>

```
<a class="c-button is-disabled" href="#" role="button">Anchor</a>
<a class="c-button is-disabled" href="#" role="button">Anchor button</a>
<button class="c-button is-disabled" type="submit" disabled>Button</button>
<input class="c-button is-disabled" type="button" value="Input" disabled>
<input class="c-button is-disabled" type="submit" value="Submit" disabled>
<input class="c-button is-disabled" type="reset" value="Reset" disabled>
```






