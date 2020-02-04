---
description: 
title: Colour Pallete.
status: draft
---



# Colour Pallete

The B.C. Government colour palette ensures all public facing government services have consistent branding.



## Primary B.C. Brand
<ul class="colour-wrapper">
    <li class="colour-card" >
        <div class="colour-display" style="background-color: var(--bcgov-wc-color-brand-primary); color: var(--bcgov-wc-color-white)" >
            #003366
        </div>
        <div class="colour-text">
            Used for <a href="">header</a>, <a href="">footer</a>, <a href="">primary button</a>
        </div>
    </li>
    <li class="colour-card" >
        <div class="colour-display" style="background-color: var(--bcgov-wc-color-brand-secondary); color: var(--bcgov-wc-color-text)" >
            #fcba19
        </div>
        <div class="colour-text">
            Used for <a href="">header</a>, <a href="">footer</a>
        </div>
    </li>
</ul>

## Text
<ul class="colour-wrapper">
    <li class="colour-card" >
        <div class="colour-display" style="background-color: var(--bcgov-wc-color-text); color: var(--bcgov-wc-color-white)" >
            #313132
        </div>
        <div class="colour-text">
            Used for <a href="">headings and paragraphs</a>
        </div>
    </li>
    
</ul>

## Links
<ul class="colour-wrapper">
    <li class="colour-card" >
        <div class="colour-display" style="background-color: var(--bcgov-wc-color-links); color: var(--bcgov-wc-color-white)" >
            #1a5a96
        </div>
        <div class="colour-text">
            Used for <a href="">links</a>
        </div>
    </li>
</ul>

## Backgrounds
<ul class="colour-wrapper">
    <li class="colour-card" >
        <div class="colour-display" style="background-color: var(--bcgov-wc-color-submenu); color: var(--bcgov-wc-color-white)" >
            #38598a
        </div>
        <div class="colour-text">
            Used for <a href="">navigation bar</a>
        </div>
    </li>
    <li class="colour-card" >
        <div class="colour-display" style="background-color: var(--bcgov-wc-color-background-seconary); color: var(--bcgov-wc-color-text)" >
            #f2f2f2
        </div>
        <div class="colour-text">
            Used for backgrounds
        </div>
    </li>
</ul>

## Components
<ul class="colour-wrapper">
    <li class="colour-card" >
        <div class="colour-display" style="background-color: var(--bcgov-wc-color-components); color: var(--bcgov-wc-color-white)" >
            #606060
        </div>
        <div class="colour-text">
            Used for <a href="">text input</a>, 
            <a href="">textarea</a>,
            <a href="">checkbox</a>, 
            <a href="">radio button</a>
        </div>
    </li>
</ul>

## Semantic Colours
<ul class="colour-wrapper">
    <li class="colour-card" >
        <div class="colour-display" style="background-color: var(--bcgov-wc-color-error); color: var(--bcgov-wc-color-white)" >
            #d8292f
        </div>
        <div class="colour-text">
            Used for error messages and indicators
        </div>
    </li>
    <li class="colour-card" >
        <div class="colour-display" style="background-color: var(--bcgov-wc-color-success); color: var(--bcgov-wc-color-white)" >
            #2e8540
        </div>
        <div class="colour-text">
            Used for success messages and indicators
        </div>
    </li>
</ul>

## Colour Contrast
You must make sure that the text and interactive elements on your page meet the [level AA of the Web Content Accessibility Guidelines (WCAG 2.0)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#larger-scaledef).

Check your colour combinations with a [colour contrast tool](https://webaim.org/resources/contrastchecker/).

## CSS variables for web components
```css
    --bcgov-wc-color-brand-primary: #036;
    --bcgov-wc-color-brand-secondary: #fcba19;
    --bcgov-wc-color-text: #313132;
    --bcgov-wc-color-links: #1a5a96;
    --bcgov-wc-color-background-primary: #38598a;
    --bcgov-wc-color-background-seconary: #f2f2f2;
    --bcgov-wc-color-components: #606060;
    --bcgov-wc-color-accessibility: #3b99fc;
    --bcgov-wc-color-menu: #2b4777;
    --bcgov-wc-color-submenu: #38598a;
    --bcgov-wc-color-menu-border: #5f79a2;
    --bcgov-wc-color-white: #fff;
    --bcgov-wc-color-error: #d8292f;
    --bcgov-wc-color-success: #2e8540;
    --bcgov-wc-font-family: BCSans, Verdana, Arial, sans-serif;
    --bcgov-wc-gutter: 10%;
```