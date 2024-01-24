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

BootstrapVerticalTabs.parameters = {
    docs: {
      source: {
        code: `
          // HTML markup for the vertical tabs
  
          <div class="d-flex align-items-start">
            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
                <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
                <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
            </div>
            <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
            </div>
           </div>

  
          // CSS styles for the vertical tabs
          .custom-vertical-tabs .v-content {
            color: #090A0B !important;
            font-family: 'Poppins';
            font-weight: normal;
            font-size: 14px;
            word-wrap: break-word;
            padding: 10px 15px 15px 15px;
          }
          
          .custom-vertical-tabs .nav-link {
            color: #393F41;
            background-color: #FFF;
            text-align: left;
            padding: .75rem 1.25rem;
            font-weight: 400;
          }
        
          .custom-vertical-tabs .nav-link:hover {
            color: #003594;
            background-color: #F8F9FA;
            border-color: #00153B;
          }
        
          .custom-vertical-tabs .nav-link.active {
            background-color: #003594 !important;
            border-color: #003594 !important;
            color: #FFF !important;
            text-align: left;
          }
        `,
      },
    },
  };