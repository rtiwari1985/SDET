# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\dropdown-practice.spec.js >> Validate dropdown options
- Location: tests\dropdown-practice.spec.js:10:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#my-select')

```

# Page snapshot

```yaml
- main [ref=e2]:
  - generic [ref=e3]:
    - heading "Web form" [level=1] [ref=e6]
    - generic [ref=e8]:
      - generic [ref=e9]:
        - generic [ref=e10]:
          - text: Text input
          - textbox "Text input" [ref=e11]
        - generic [ref=e12]:
          - text: Password
          - textbox "Password" [ref=e13]
        - generic [ref=e14]:
          - text: Textarea
          - textbox "Textarea" [ref=e15]
        - generic [ref=e16]:
          - text: Disabled input
          - textbox "Disabled input" [disabled] [ref=e17]
        - generic [ref=e18]:
          - text: Readonly input
          - textbox "Readonly input" [ref=e19]
        - link "Return to index" [ref=e21] [cursor=pointer]:
          - /url: ./index.html
      - generic [ref=e22]:
        - generic [ref=e23]:
          - text: Dropdown (select)
          - combobox "Dropdown (select)" [ref=e24]:
            - option "Open this select menu" [selected]
            - option "One"
            - option "Two"
            - option "Three"
        - generic [ref=e25]:
          - text: Dropdown (datalist)
          - combobox "Dropdown (datalist)" [ref=e26]
        - generic [ref=e27]:
          - text: File input
          - button "File input" [ref=e28] [cursor=pointer]
        - generic [ref=e29]:
          - generic [ref=e30]:
            - checkbox "Checked checkbox" [checked] [ref=e31]
            - text: Checked checkbox
          - generic [ref=e32]:
            - checkbox "Default checkbox" [ref=e33]
            - text: Default checkbox
        - generic [ref=e35]:
          - radio "Checked radio" [checked] [ref=e36]
          - text: Checked radio
        - generic [ref=e38]:
          - radio "Default radio" [ref=e39]
          - text: Default radio
        - button "Submit" [ref=e40] [cursor=pointer]
      - generic [ref=e41]:
        - generic [ref=e42]:
          - text: Color picker
          - textbox "Color picker" [ref=e43] [cursor=pointer]: "#563d7c"
        - generic [ref=e44]:
          - text: Date picker
          - textbox "Date picker" [ref=e45]
        - generic [ref=e46]:
          - text: Example range
          - slider "Example range" [ref=e47]: "5"
```

# Test source

```ts
  1  | 
  2  | const { test, expect } = require('@playwright/test');
  3  | 
  4  | const options = [
  5  |   { label: 'One', value: '1' },
  6  |   { label: 'Two', value: '2' },
  7  |   { label: 'Three', value: '3' }
  8  | ];
  9  | 
  10 | test('Validate dropdown options', async ({ page }) => {
  11 |   await page.goto(
  12 |     'https://www.selenium.dev/selenium/web/web-form.html'
  13 |   );
  14 | 
  15 |   const dropdown = page.locator('#my-select');
  16 | 
  17 |   for (const option of options) {
> 18 |     await dropdown.selectOption({ label: option.label });
     |                    ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
  19 | 
  20 |     await expect(dropdown).toHaveValue(option.value);
  21 | 
  22 |     console.log('PASS: Selected', option.label);
  23 |   }
  24 | });
  25 | 
```