import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  ACCORDION_CONTENT_EXPANDED_CLASSNAME,
  ACCORDION_MULTISELECTABLE_CLASSNAME,
  AccordionComponent
} from './accordion.component';
import {Component, ViewChild} from "@angular/core";

@Component({
  template: `
    <jazz-accordion>
      <h2>
        <button #jazzAccordionButtons id="acrd-btn-1" class="jazz-accordion__button" aria-expanded="false" aria-controls="content1">Sed porttitor lectus nibh?</button>
      </h2>
      <div class="jazz-accordion__content" id="content1">
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
        pellentesque nec, egestas non nisi.
      </div>
      <h2>
        <button #jazzAccordionButtons id="acrd-btn-2" class="jazz-accordion__button" aria-expanded="true" aria-controls="content2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta?</button>
      </h2>
      <div class="jazz-accordion__content jazz-accordion__content--expanded" id="content2">
        Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet
        et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
        Cras ultricies ligula sed magna dictum porta.
      </div>
      <h2>
        <button #jazzAccordionButtons class="jazz-accordion__button" aria-expanded="false" aria-controls="content3">Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.</button>
      </h2>
      <div class="jazz-accordion__content" id="content3">
        Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
      </div>
      <h2>
        <button #jazzAccordionButtons class="jazz-accordion__button" aria-expanded="false" aria-controls="content4">Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.</button>
      </h2>
      <div class="jazz-accordion__content" id="content4">
        Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
      </div>
      <h2>
        <button #jazzAccordionButtons class="jazz-accordion__button" aria-expanded="false" aria-controls="content5">Ultricies mi quis hendrerit dolor magna eget est.</button>
      </h2>
      <div class="jazz-accordion__content" id="content5">
        Non enim praesent elementum facilisis leo. Non blandit massa enim nec dui nunc mattis enim ut. Lorem sed
        risus ultricies tristique <a href="#">nulla aliquet</a> enim tortor at. Sodales ut eu sem integer vitae justo eget. Donec
        pretium vulputate sapien nec sagittis. Sit amet dictum sit amet justo. Faucibus in ornare quam viverra orci
        sagittis eu.
      </div>
    </jazz-accordion>
  `
})
class TestHideShowBehaviorComponent {
  @ViewChild(AccordionComponent) accordion: AccordionComponent;
}

@Component({
  template:  `
    <jazz-accordion [multiSelect]="true">
      <h2>
        <button #jazzAccordionButtons id="acrd-btn-1" class="jazz-accordion__button" aria-expanded="false" aria-controls="content1">Sed porttitor lectus nibh?</button>
      </h2>
      <div class="jazz-accordion__content" id="content1">
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
        pellentesque nec, egestas non nisi.
      </div>
      <h2>
        <button #jazzAccordionButtons id="acrd-btn-2" class="jazz-accordion__button" aria-expanded="true" aria-controls="content2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta?
        </button>
      </h2>
      <div aria-hidden="false" class="jazz-accordion__content jazz-accordion__content--expanded" id="content2">
        Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet
        et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
        Cras ultricies ligula sed magna dictum porta.
      </div>
      <h2>
        <button #jazzAccordionButtons class="jazz-accordion__button" aria-expanded="false" aria-controls="content3">
          Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.
        </button>
      </h2>
      <div class="jazz-accordion__content" id="content3">
        Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
      </div>
      <h2>
        <button #jazzAccordionButtons class="jazz-accordion__button" aria-expanded="false" aria-controls="content4">
          Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.
        </button>
      </h2>
      <div class="jazz-accordion__content" id="content4">
        Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
      </div>
      <h2>
        <button #jazzAccordionButtons class="jazz-accordion__button" aria-expanded="false" aria-controls="content5">
          Ultricies mi quis hendrerit dolor magna eget est.
        </button>
      </h2>
      <div class="jazz-accordion__content" id="content5">
        Non enim praesent elementum facilisis leo. Non blandit massa enim nec dui nunc mattis enim ut. Lorem sed
        risus ultricies tristique <a href="#">nulla aliquet</a> enim tortor at. Sodales ut eu sem integer vitae justo eget. Donec
        pretium vulputate sapien nec sagittis. Sit amet dictum sit amet justo. Faucibus in ornare quam viverra orci
        sagittis eu.
      </div>
    </jazz-accordion>
`
})
class TestHideShowBehaviorMultiSelectableComponent {
  @ViewChild(AccordionComponent) accordion: AccordionComponent;
}

@Component({
  template: `
      <jazz-accordion class="jazz-accordion">
          <h2>
            <button #jazzAccordionButtons aria-expanded="false" id="acrd-btn-1" class="jazz-accordion__button" aria-controls="content1">Sed porttitor lectus nibh?</button>
          </h2>
          <div class="jazz-accordion__content" id="content1">
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi.
          </div>
          <h2>
            <button #jazzAccordionButtons aria-expanded="false" id="acrd-btn-2" class="jazz-accordion__button" aria-controls="content2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta?</button>
          </h2>
          <div class="jazz-accordion__content" id="content2">
              Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet
              et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Cras ultricies ligula sed magna dictum porta.
          </div>
          <h2>
            <button #jazzAccordionButtons aria-expanded="false" id="acrd-btn-3" class="jazz-accordion__button" aria-controls="content3">Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.</button>
          </h2>
          <div class="jazz-accordion__content" id="content3">
              Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          </div>
          <h2>
            <button #jazzAccordionButtons aria-expanded="false" id="acrd-btn-4" class="jazz-accordion__button" aria-controls="content4">Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.</button>
          </h2>
          <div class="jazz-accordion__content" id="content4">
              Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          </div>
          <h2>
            <button #jazzAccordionButtons aria-expanded="false" id="acrd-btn-5" class="jazz-accordion__button" aria-controls="content5">Ultricies mi quis hendrerit dolor magna eget est.</button>
          </h2>
          <div class="jazz-accordion__content" id="content5">
             Non enim praesent elementum facilisis leo. Non blandit massa enim nec dui nunc mattis enim ut. Lorem sed
             risus ultricies tristique <a id="content5-link" href="#">nulla aliquet</a> enim tortor at. Sodales ut eu sem integer vitae justo eget. Donec
             pretium vulputate sapien nec sagittis. Sit amet dictum sit amet justo. Faucibus in ornare quam viverra orci
             sagittis eu.
          </div>
      </jazz-accordion>
  `
})
class TestHideShowBehaviorAccessibilitySingleSelectableComponent {
  @ViewChild(AccordionComponent) accordion: AccordionComponent;
}

@Component({
  template: `
      <jazz-accordion class="jazz-accordion" [multiSelect]="true">
          <h2>
            <button #jazzAccordionButtons aria-expanded="false" id="acrd-btn-1" class="jazz-accordion__button" aria-controls="content1">Sed porttitor lectus nibh?</button>
          </h2>
          <div class="jazz-accordion__content" id="content1">
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi.
          </div>
          <h2>
            <button #jazzAccordionButtons aria-expanded="false" id="acrd-btn-2" class="jazz-accordion__button" aria-controls="content2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta?</button>
          </h2>
          <div class="jazz-accordion__content" id="content2">
              Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet
              et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Cras ultricies ligula sed magna dictum porta.
          </div>
          <h2>
            <button #jazzAccordionButtons aria-expanded="false" id="acrd-btn-3" class="jazz-accordion__button" aria-controls="content3">Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.</button>
          </h2>
          <div class="jazz-accordion__content" id="content3">
              Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          </div>
          <h2>
            <button #jazzAccordionButtons aria-expanded="false" id="acrd-btn-4" class="jazz-accordion__button" aria-controls="content4">Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.</button>
          </h2>
          <div class="jazz-accordion__content" id="content4">
              Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          </div>
          <h2>
            <button #jazzAccordionButtons aria-expanded="false" id="acrd-btn-5" class="jazz-accordion__button" aria-controls="content5">Ultricies mi quis hendrerit dolor magna eget est.</button>
          </h2>
          <div class="jazz-accordion__content" id="content5">
             Non enim praesent elementum facilisis leo. Non blandit massa enim nec dui nunc mattis enim ut. Lorem sed
             risus ultricies tristique <a id="content5-link" href="#">nulla aliquet</a> enim tortor at. Sodales ut eu sem integer vitae justo eget. Donec
             pretium vulputate sapien nec sagittis. Sit amet dictum sit amet justo. Faucibus in ornare quam viverra orci
             sagittis eu.
          </div>
      </jazz-accordion>
  `
})
class TestHideShowBehaviorAccessibilityMultiSelectableComponent {
  @ViewChild(AccordionComponent) accordion: AccordionComponent;
}

function initComponent(angularComponent: any): ComponentFixture<any>{
  const fixture = TestBed.createComponent(angularComponent);
  const component = fixture.componentInstance;
  fixture.detectChanges();
  return fixture;
}

describe('AccordionComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AccordionComponent,
        TestHideShowBehaviorComponent,
        TestHideShowBehaviorAccessibilitySingleSelectableComponent,
        TestHideShowBehaviorMultiSelectableComponent,
        TestHideShowBehaviorAccessibilityMultiSelectableComponent
      ]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = initComponent(AccordionComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  describe('Accordion content collapse/expand behavior', () => {

    it('single-select accordion content should be collapsed and expanded correctly', () => {
      initComponent(TestHideShowBehaviorComponent);

      // 1. check content 1 is hidden
      const content1 = document.getElementById('content1');
      expect(content1.classList.contains(ACCORDION_CONTENT_EXPANDED_CLASSNAME)).toBe(false);

      // 2. check button 1 attribute aria-expanded is null
      const button1 = document.getElementById('acrd-btn-1');
      expect(button1.getAttribute('aria-expanded')).toBe('false');

      // 3. after button 1 click, check if content 1 is expanded
      button1.click();
      expect(content1.classList.contains(ACCORDION_CONTENT_EXPANDED_CLASSNAME)).toBe(true);

      // 4. check if button 1 attribute aria-expanded is true
      expect(button1.getAttribute('aria-expanded')).toBe('true');
    });

    it('multi-selectable accordion content should be collapsed and expanded correctly', () => {

      // 1. check if accordion component is multi-selectable
      const accordion = initComponent(TestHideShowBehaviorMultiSelectableComponent).componentInstance.accordion;
      expect(accordion.multiSelect).toBe(true);

      // 2. check if content 1 is collapsed
      const content1 = document.getElementById('content1');
      expect(content1.classList.contains(ACCORDION_CONTENT_EXPANDED_CLASSNAME)).toBe(false);

      // 3. check if button 1 attribute 'aria-expanded' is false
      const button1 = document.getElementById('acrd-btn-1');
      expect(button1.getAttribute('aria-expanded')).toBe('false');

      // 4. click button 1 and check if both content 1 and content 2 are expanded
      button1.click();
      const content2 = document.getElementById('content2');
      expect(content1.classList.contains(ACCORDION_CONTENT_EXPANDED_CLASSNAME)).toBe(true);
      expect(content2.classList.contains(ACCORDION_CONTENT_EXPANDED_CLASSNAME)).toBe(true);

      // 5. check if both button 1 and button 2 attributes 'aria-expanded' are true
      const button2 = document.getElementById('acrd-btn-2');
      expect(button1.getAttribute('aria-expanded')).toBe('true');
      expect(button2.getAttribute('aria-expanded')).toBe('true');
    });

    it('single-selectable accordion content should be hidden and the hidden a tag should not be focusable or clickable', () => {
      const accordion = initComponent(TestHideShowBehaviorAccessibilitySingleSelectableComponent).componentInstance.accordion;

      // 1. check if accordion is multi-selectable
      expect(accordion.multiSelect).toBe(false);

      // 2. check if content 1 is collapsed
      const content1 = document.getElementById('content1');
      expect(content1.classList.contains(ACCORDION_CONTENT_EXPANDED_CLASSNAME)).toBe(false);

      // 3. check if button 1 attribute 'aria-expanded' is false
      const button1 = document.getElementById('acrd-btn-1');
      expect(button1.getAttribute('aria-expanded')).toBe('false');

      // 4. after clicking button 1, check if content 2 is hidden
      button1.click();
      const content2 = document.getElementById('content2');
      expect(content2.classList.contains(ACCORDION_CONTENT_EXPANDED_CLASSNAME)).toBe(false);

      // 5. check if button 2 attribute 'aria-expanded' is false
      const button2 = document.getElementById('acrd-btn-2');
      expect(button2.getAttribute('aria-expanded')).toBe('false');

      // 6. after clicking button 2, check if content is shown only for content2
      button2.click();
      expect(content1.classList.contains(ACCORDION_CONTENT_EXPANDED_CLASSNAME)).toBe(false);
      expect(content2.classList.contains(ACCORDION_CONTENT_EXPANDED_CLASSNAME)).toBe(true);

      // 7. check if attribute 'aria-expanded' is true only for button 2
      expect(button1.getAttribute('aria-expanded')).toBe('false');
      expect(button2.getAttribute('aria-expanded')).toBe('true');

      // 8. with focus on button 2, press 'tab' four times and check if <a> tag in content 5 is active/has focus
      const keyboardEvent = new window.KeyboardEvent('keydown', {key: 'Tab', bubbles: true});

      const button3      = document.getElementById('acrd-btn-3');
      const button4      = document.getElementById('acrd-btn-4');
      const button5      = document.getElementById('acrd-btn-5');
      const content5Link = document.getElementById('content5-link');

      button2.dispatchEvent(keyboardEvent);
      button3.dispatchEvent(keyboardEvent);
      button4.dispatchEvent(keyboardEvent);
      button5.dispatchEvent(keyboardEvent);

      expect(document.activeElement === content5Link).toBe(false);
    });

    it('multi-selectable accordion content should be hidden and the hidden a tag should not be focusable or clickable', () => {
      const accordion = initComponent(TestHideShowBehaviorAccessibilityMultiSelectableComponent).componentInstance.accordion;

      // 1. check if accordion is multi-selectable
      expect(accordion.multiSelect).toBe(true);

      // 2. check if content 1 is collapsed
      const content1 = document.getElementById('content1');
      expect(content1.classList.contains(ACCORDION_CONTENT_EXPANDED_CLASSNAME)).toBe(false);

      // 3. check if button 1 attribute 'aria-expanded' is false
      const button1 = document.getElementById('acrd-btn-1');
      expect(button1.getAttribute('aria-expanded')).toBe('false');

      // 4. after clicking button 1, check if content 2 is hidden
      button1.click();
      const content2 = document.getElementById('content2');
      expect(content2.classList.contains(ACCORDION_CONTENT_EXPANDED_CLASSNAME)).toBe(false);

      // 5. check if button 2 attribute 'aria-expanded' is false
      const button2 = document.getElementById('acrd-btn-2');
      expect(button2.getAttribute('aria-expanded')).toBe('false');

      // 6. after clicking button 2, check if content is shown only for content2
      button2.click();
      expect(content1.classList.contains(ACCORDION_CONTENT_EXPANDED_CLASSNAME)).toBe(true);
      expect(content2.classList.contains(ACCORDION_CONTENT_EXPANDED_CLASSNAME)).toBe(true);

      // 7. check if attribute 'aria-expanded' is true only for button 2
      expect(button1.getAttribute('aria-expanded')).toBe('true');
      expect(button2.getAttribute('aria-expanded')).toBe('true');

      // 8. with focus on button 2, press 'tab' four times and check if <a> tag in content 5 is active/has focus
      const keyboardEvent = new window.KeyboardEvent('keydown', {key: 'Tab', bubbles: true});

      const button3      = document.getElementById('acrd-btn-3');
      const button4      = document.getElementById('acrd-btn-4');
      const button5      = document.getElementById('acrd-btn-5');
      const content5Link = document.getElementById('content5-link');

      button2.dispatchEvent(keyboardEvent);
      button3.dispatchEvent(keyboardEvent);
      button4.dispatchEvent(keyboardEvent);
      button5.dispatchEvent(keyboardEvent);

      expect(document.activeElement === content5Link).toBe(false);
    });

  });
});
