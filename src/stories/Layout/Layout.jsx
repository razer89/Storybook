
import React, { useEffect, useState } from 'react';
import './layout.less';

const Layout = () => {
    const [activeLink, setActiveLink] = useState('');
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
  
     
        if (scrollPosition < 100) {
            setActiveLink('home');
          } else if (scrollPosition < 1000) {
            setActiveLink('principles');
          } else {
            setActiveLink('layout');
          }
  
    
        document.querySelectorAll('#left-sidebar a').forEach((link) => {
          link.classList.remove('active');
        });
  
        const activeNavLink = document.querySelector(`#left-sidebar a[href="#${activeLink}"]`);
        if (activeNavLink) {
          activeNavLink.classList.add('active');
        }
      };
  
      
      window.addEventListener('scroll', handleScroll);
  
     
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [activeLink]);
  
    return (
      <div className="layout">
        
        <div id="left-sidebar">
        <h2>Content</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#principles">Principles</a></li>
            <li><a href="#layout">Layout</a></li>
           
          </ul>
        </div>
  
        <div id="right-content">
          <div id="home">
            <h2>Welcome to Layout Guidelines</h2>
            <p>Layout defines page structure, hierarchy, and rhythm. Mindful and calculated choices decrease the amount of time that a user needs to perform a complex task.</p>
          </div>
          <br></br>
  
          <div id="principles">
            <h2>Principles</h2>
            <p>At Enghouse, we design pages that are:</p>
            <p><strong>1. Consistent</strong><br></br>Use repetitive layouts and content patterns to create intuitive and easy-to-read pages</p>
            <p><strong>2. Inclusive</strong><br></br>Design layouts and content that work on various screen sizes</p>
            <p><strong>3. Balanced</strong><br></br>Use size and white space to emphasise priority of a layout region or content element</p>
            <p><strong>4. Connected</strong><br></br>Use smaller distance between related regions or content elements</p>
          </div>
          <br></br>

          <div id="layout">
            <h2>Layout</h2>
            <p>In order to design an application with a great layout, it’s important to understand:</p>
            <p><strong>1. What the app's core frame will be</strong></p>
            <p><strong>2. How each frames segment will use the grid</strong></p>
            <p><strong>3. What content will appear in the grid</strong></p>
            <br></br>

            <h3>1. Application frame</h3>
            <p>An application frame is a basic structure of a page with consistent interface elements.</p>
            <p><img src="/layoutctn1.png" alt="alt text" title="Application Frame" style={{ width: '780px', height: '478px' }}/></p>
            <p>Enghouse pages consists of 4 areas:</p>
            <table>
                <thead>
                    <tr>
                        <th>AREA</th>
                        <th>USAGE</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr>
                            <td>1. Header (top bar)</td>
                            <td style={{ whiteSpace: 'normal' }}>General navigation at the top of a page which allows users to navigate between different environments. It’s a full width container with a max height of 50px.</td>
                        </tr>
                        <tr>
                            <td>2. Sidebar navigation</td>
                            <td>Local navigation of an environment. It’s a container with a min width of 185px.</td>
                        </tr>
                        <tr>
                            <td>3. Content area</td>
                            <td style={{ whiteSpace: 'normal' }}>Page content area with a width that's adaptive to screen size. By deafult the content padding should be 15px all-round</td>
                        </tr>
                        <tr>
                            <td>4. Footer</td>
                            <td>General footer at the bottom of a page. It’s a full width container with a max height of 50px.</td>
                        </tr>
                    </tbody>
            </table>
            <br></br>
            <div id="layoutgrid">
            <h3>2. Layout grid</h3>
            <p>We use a fluid layout grid type with a fixed maximum width. It uses columns that scale and resize the content that's placed on the grid accordingly. This means that content placement on a screen is always consistent.</p>
            <p>The grid is constructed from 3 elements:</p>
            <ul>
                <li>Columns</li>
                <li>Gutters</li>
                <li>Margins</li>
            </ul>
            </div>
            <h4>Columns</h4>
            <p>Enghouse Networks uses a 12-column grid. Column width is fluid and changes according to the page width.</p>
            <p><img src="/layoutgrid.png" alt="alt text" title="Application Frame" style={{ width: '780px', height: '478px' }}/></p>
            <br></br>

            <p>Use column spans to construct layout regions. Regions will be separated by a grid gutter.</p>
            <p><img src="/layoutgutters.png" alt="alt text" title="Application Frame" style={{ width: '780px', height: '478px' }}/></p>
            <br></br>

            <h4>Gutters</h4>
            <p>Gutters are the gaps between the columns. Gutter width has a fixed value of 15 px.</p>
            <p><img src="/layoutgtr.png" alt="alt text" title="Application Frame" style={{ width: '780px', height: '478px' }}/></p>
            <br></br>

            <h4>Margins</h4>
            <p>By default, a page's content area has 15px side margins and a 15px bottom margin.</p>
            <p>To arrange content inside of a page, use a 12-column grid.</p>
            <p><img src="/layoutmargins.png" alt="alt text" title="Application Frame" style={{ width: '780px', height: '478px' }}/></p>



          </div>
          
        </div>
      </div>
    );
  };
  
  export default Layout;