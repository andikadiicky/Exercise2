function tambah() {
  a = eval(form.a.value)
  b = eval(form.b.value)
  c = a + b
  form.hasil.value = c
}
function kurang() {
  a = eval(form.a.value)
  b = eval(form.b.value)
  c = a - b
  form.hasil.value = c
}
function kali() {
  a = eval(form.a.value)
  b = eval(form.b.value)
  c = a * b
  form.hasil.value = c
}
function bagi() {
  a = eval(form.a.value)
  b = eval(form.b.value)
  c = a / b
  form.hasil.value = c
}
function pangkat() {
  a = eval(form.a.value)
  b = eval(form.b.value)
  c = Math.pow(a, b)
  form.hasil.value = c
}
function kosong() {
  form.a.focus()
  form.a.value =""
  form.b.value =""
  form.hasil.value =""
}