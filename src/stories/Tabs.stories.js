import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from './Tabs';

export default {
    title: 'Components/Tabs',
    tags: ['autodocs'],
    component: Tabs,
    parameters: {
      docs: {
        source: {
          code: `
          // Your HTML markup for the tabs component

          <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
        </div>
        
          // Your CSS styles for the tabs component
           .nav-link {
            color: #393F41;
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 16px;
            background-color: #C8CDD0;
            border-radius: 4px 4px 0 0;
            border-color: #FFF !important;
            padding: 10px;
            line-height: 1.2;
        }
        
        .nav-link.active {
            color: #090A0B !important;
            font-family: 'Poppins';
            font-weight: 500;
            border-radius: 4px 4px 0 0;
            border-color: #FFF !important;
        }

        .nav-tabs {
            border-bottom: 1px solid #FFF;
            gap: 4px;
        }

        .nav-link:hover {
            background: #FFF;
            color: #090A08;
            border-color: #FFF !important;
        }

        .home-content {
            color: #090A0B !important;
            font-family: 'Poppins';
            font-weight: normal;
            font-size: 14px;
            word-wrap: break-word;
            padding: 10px 15px 15px 15px;
        }
        
        .profile-content {
            color: #090A0B !important;
            font-family: 'Poppins';
            font-weight: normal;
            font-size: 14px;
            word-wrap: break-word;
            padding: 10px 15px 15px 15px;
        }
        
        .contact-content {
            color: #090A0B !important;
            font-family: 'Poppins';
            font-weight: normal;
            font-size: 14px;
            word-wrap: break-word;
            padding: 10px 15px 15px 15px;
        }
          `,
        },
      },
    },
  };

const Template = (args) => <Tabs {...args} />;

export const BootstrapTabs = Template.bind({});
BootstrapTabs.args = {
  tabs: [
    { id: 'home', label: 'Home', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ', backgroundColor: '#FFF', contentClass: 'home-content' },
    { id: 'profile', label: 'Profile', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', backgroundColor: '#FFF', contentClass: 'profile-content' },
    { id: 'contact', label: 'Contact', content: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', backgroundColor: '#FFF', contentClass: 'contact-content' },
  ],
  activeTab: 'home',
};

export const BootstrapVerticalTabs = Template.bind({});
BootstrapVerticalTabs.args = {
  tabs: [
    { id: 'v-home', label: 'Home', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ', backgroundColor: '#FFF', contentClass: 'v-content' },
    { id: 'v-profile', label: 'Profile', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', backgroundColor: '#FFF', contentClass: 'v-content' },
    { id: 'v-messages', label: 'Messages', content: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', backgroundColor: '#FFF', contentClass: 'v-content' },
    { id: 'v-settings', label: 'Security Settings', content: '...', backgroundColor: '#FFF', contentClass: 'v-content' },
  ],
  activeTab: 'v-home',
  isVertical: true,
  verticalClass: 'custom-vertical-tabs',
};