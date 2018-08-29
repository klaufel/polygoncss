# Button component

Button styles can be applied to any element. Typically you'll want to use either a `<a>`, `<button`, `<input>` element:


## Generic examples

A simple button composed of different elements.


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

You can make your buttons inactive by adding the class`"is-disabled"` to the `<a>` elements and add the boolean attribute `disabled` for the elements that support it type `<button>` and `<input>`. You can use both methods.

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






