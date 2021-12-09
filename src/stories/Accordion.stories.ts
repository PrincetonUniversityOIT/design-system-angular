import {moduleMetadata, storiesOf} from '@storybook/angular';
import {AccordionComponent} from 'design-system-angular';

const stories = storiesOf('Components/Accordion', module)
  .addDecorator(
    moduleMetadata({
      declarations: [AccordionComponent],
    })
  );

stories.add('Basic', () => {
  return {
    template:  `
        <jazz-accordion>
        <h2>
          <button #jazzAccordionButtons class="jazz-accordion__button" aria-expanded="false" aria-controls="content1">Sed porttitor lectus nibh?</button>
        </h2>
        <div class="jazz-accordion__content" id="content1">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
          pellentesque nec, egestas non nisi.
        </div>
        <h2>
          <button #jazzAccordionButtons class="jazz-accordion__button" aria-expanded="true" aria-controls="content2">
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
      </jazz-accordion>
`
  };
});

stories.add('Multi Select', () => {
  return {
    template:  `
        <jazz-accordion [multiSelect]="true">
        <h2>
          <button #jazzAccordionButtons class="jazz-accordion__button" aria-expanded="false" aria-controls="content1">Sed porttitor lectus nibh?</button>
        </h2>
        <div class="jazz-accordion__content" id="content1">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
          pellentesque nec, egestas non nisi.
        </div>
        <h2>
          <button #jazzAccordionButtons class="jazz-accordion__button" aria-expanded="true" aria-controls="content2">
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
      </jazz-accordion>
`
  };
});

stories.add('Bordered', () => {
  return {
    template: `
      <jazz-accordion [showBorder]="true">
        <h2>
          <button #jazzAccordionButtons class="jazz-accordion__button" aria-expanded="false" aria-controls="content1">Sed porttitor lectus nibh?</button>
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
  };
});

// This Storybook component tests out the default browser behaviors for the HTML tags being tested in the Accordion
stories.add('Test Collapsed HTML Styles', () => {
  return {
    template: `
      <jazz-accordion class="jazz-accordion" role="region">
        <h2>
          <button #jazzAccordionButtons class="jazz-accordion__button" aria-expanded="false"  aria-controls="content1">This contains a single paragraph tag</button>
        </h2>
        <div class="jazz-accordion__content" id="content1">
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
            pellentesque nec, egestas non nisi.
          </p>
        </div>
        <h2>
          <button #jazzAccordionButtons id="acrd-btn-2" class="jazz-accordion__button" aria-expanded="true" aria-controls="content2">This contains multiple paragraph tags</button>
        </h2>
        <div class="jazz-accordion__content jazz-accordion__content--expanded" id="content2">
          <p>
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet
            et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Cras ultricies ligula sed magna dictum porta.
          </p>
          <p>
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet
            et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Cras ultricies ligula sed magna dictum porta.
          </p>
          <p>
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet
            et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Cras ultricies ligula sed magna dictum porta.
          </p>
        </div>
        <h2>
          <button #jazzAccordionButtons aria-expanded="false" id="acrd-btn-2" class="jazz-accordion__button" aria-controls="content3">This contains a single heading tag</button>
        </h2>
        <div class="jazz-accordion__content" id="content3">
          <h1>
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet
            et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Cras ultricies ligula sed magna dictum porta.
          </h1>
        </div>
        <h2>
          <button #jazzAccordionButtons aria-expanded="false" id="acrd-btn-2" class="jazz-accordion__button" aria-controls="content4">This contains multiple heading tags</button>
        </h2>
        <div class="jazz-accordion__content" id="content4">
          <h1>
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet
            et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Cras ultricies ligula sed magna dictum porta.
          </h1>
          <h2>
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet
            et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Cras ultricies ligula sed magna dictum porta.
          </h2>
          <h3>
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet
            et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Cras ultricies ligula sed magna dictum porta.
          </h3>
          <h4>
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet
            et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Cras ultricies ligula sed magna dictum porta.
          </h4>
          <h5>
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet
            et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Cras ultricies ligula sed magna dictum porta.
          </h5>
          <h6>
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet
            et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Cras ultricies ligula sed magna dictum porta.
          </h6>
        </div>
        <h2>
          <button #jazzAccordionButtons aria-expanded="false" class="jazz-accordion__button" aria-controls="content5">This contains an unordered list</button>
        </h2>
        <div class="jazz-accordion__content" id="content5">
          <ul>
            <li>
              Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            </li>
            <li>
              Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            </li>
          </ul>
          <p>Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
        </div>
        <h2>
          <button #jazzAccordionButtons aria-expanded="false" class="jazz-accordion__button" aria-controls="content6">This contains an ordered list</button>
        </h2>
        <div class="jazz-accordion__content" id="content6">
          <ol>
            <li>
              Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            </li>
            <li>
              Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            </li>
          </ol>
          <p>Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
        </div>
        <h2>
          <button #jazzAccordionButtons aria-expanded="false" class="jazz-accordion__button" aria-controls="content7">This contains a table</button>
        </h2>
        <div class="jazz-accordion__content" id="content7">
          <table>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
              <th>Founded</th>
              <th>Visited</th>
            </tr>
            <tr>
              <td><a href="#">Alfreds Futterkiste</a></td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>1994</td>
              <td>
                <button>Yes</button>
                <button>No</button>
              </td>
            </tr>
            <tr>
              <td><a href="#">Centro comercial Moctezuma</a></td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
              <td>2006</td>
              <td>
                <button>Yes</button>
                <button>No</button>
              </td>
            </tr>
            <tr>
              <td><a href="#">Electrolux</a></td>
              <td>Paul Adams</td>
              <td>US</td>
              <td>2016</td>
              <td>
                <button>Yes</button>
                <button>No</button>
              </td>
            </tr>
            <tr>
              <td><a href="#">XILINX</a></td>
              <td>Candice Krueger</td>
              <td>US</td>
              <td>2009</td>
              <td>
                <button>Yes</button>
                <button>No</button>
              </td>
            </tr>
          </table>
          </div>
          <h2>
            <button #jazzAccordionButtons aria-expanded="false" class="jazz-accordion__button" aria-controls="content8">This contains multiple tables</button>
          </h2>
          <div class="jazz-accordion__content" id="content8">
            <table>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
                <th>Founded</th>
              </tr>
              <tr>
                <td><a href="#">Alfreds Futterkiste</a></td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>1994</td>
                <td>
                  <button>Yes</button>
                  <button>No</button>
                </td>
              </tr>
              <tr>
                <td><a href="#">Centro comercial Moctezuma</a></td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                <td>2006</td>
                <td>
                  <button>Yes</button>
                  <button>No</button>
                </td>
              </tr>
              <tr>
                <td><a href="#">Electrolux</a></td>
                <td>Paul Adams</td>
                <td>US</td>
                <td>2016</td>
                <td>
                  <button>Yes</button>
                  <button>No</button>
                </td>
              </tr>
              <tr>
                <td><a href="#">XILINX</a></td>
                <td>Candice Krueger</td>
                <td>US</td>
                <td>2009</td>
                <td>
                  <button>Yes</button>
                  <button>No</button>
                </td>
              </tr>
            </table>
            <table>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
                <th>Founded</th>
              </tr>
              <tr>
                <td><a href="#">Alfreds Futterkiste</a></td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>1994</td>
                <td>
                  <button>Yes</button>
                  <button>No</button>
                </td>
              </tr>
              <tr>
                <td><a href="#">Centro comercial Moctezuma</a></td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                <td>2006</td>
                <td>
                  <button>Yes</button>
                  <button>No</button>
                </td>
              </tr>
              <tr>
                <td><a href="#">Electrolux</a></td>
                <td>Paul Adams</td>
                <td>US</td>
                <td>2016</td>
                <td>
                  <button>Yes</button>
                  <button>No</button>
                </td>
              </tr>
              <tr>
                <td><a href="#">XILINX</a></td>
                <td>Candice Krueger</td>
                <td>US</td>
                <td>2009</td>
                <td>
                  <button>Yes</button>
                  <button>No</button>
                </td>
              </tr>
            </table>
            <table>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
                <th>Founded</th>
              </tr>
              <tr>
                <td><a href="#">Alfreds Futterkiste</a></td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>1994</td>
                <td>
                  <button>Yes</button>
                  <button>No</button>
                </td>
              </tr>
              <tr>
                <td><a href="#">Centro comercial Moctezuma</a></td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                <td>2006</td>
                <td>
                  <button>Yes</button>
                  <button>No</button>
                </td>
              </tr>
              <tr>
                <td><a href="#">Electrolux</a></td>
                <td>Paul Adams</td>
                <td>US</td>
                <td>2016</td>
                <td>
                  <button>Yes</button>
                  <button>No</button>
                </td>
              </tr>
              <tr>
                <td><a href="#">XILINX</a></td>
                <td>Candice Krueger</td>
                <td>US</td>
                <td>2009</td>
                <td>
                  <button>Yes</button>
                  <button>No</button>
                </td>
              </tr>
            </table>
          </div>
          <h2>
            <button #jazzAccordionButtons aria-expanded="false" class="jazz-accordion__button" aria-controls="content9">This contains a quote</button>
          </h2>
          <div class="jazz-accordion__content" id="content9">
            <q>
              Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            </q>
          </div>
          <h2>
            <button #jazzAccordionButtons aria-expanded="false" class="jazz-accordion__button" aria-controls="content10">This contains a blockquote</button>
          </h2>
          <div class="jazz-accordion__content" id="content10">
            <blockquote cite="#">
              Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            </blockquote>
          </div>
          <h2>
            <button #jazzAccordionButtons aria-expanded="false" class="jazz-accordion__button" aria-controls="content11">This contains a form with inputs</button>
          </h2>
          <div class="jazz-accordion__content" id="content11">
            <form>
             <label for="fname">First name:</label><br>
             <input type="text" id="fname" name="fname"><br>
             <label for="lname">Last name:</label><br>
             <input type="text" id="lname" name="lname">
            </form>
          </div>
          <h2>
            <button #jazzAccordionButtons aria-expanded="false" class="jazz-accordion__button" aria-controls="content12">This contains a form with a textarea</button>
          </h2>
          <div class="jazz-accordion__content" id="content12">
            <form>
             <label for="fname">Feedback:</label><br>
             <textarea id="textareaname" name="textareaname">
              Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
             </textarea>
            </form>
          </div>
          <h2>
            <button #jazzAccordionButtons aria-expanded="false" class="jazz-accordion__button" aria-controls="content13">This contains a header tag, containing a heading and multiple paragraph tags</button>
          </h2>
          <div class="jazz-accordion__content" id="content13">
            <header>
              <h3>Nulla porttitor</h3>
              <p>accumsan tincidunt vestibulum ante ipsum primis.</p>
              <p>ante ipsum primis in faucibus orci luctus et ultrices</p>
            </header>
          </div>
        </jazz-accordion>
`
  };
});

