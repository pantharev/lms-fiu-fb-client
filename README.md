# Introduction

In today’s age of technology, getting an education online via online courses has never been easier. However, people from underdeveloped countries are often cut off from accessing these courses due to limitations on their internet data. Facebook allows underdeveloped regions to access their application for free with no data charges. The purpose of the application we have developed is to provide a **Learning Management System** that is accessible entirely through Facebook, allowing students from anywhere in the world to come and take online courses with no data charges.

# Current System

A 3rd version Single Page Application Web-App that is integrated into Facebook. To further elaborate, previous developers have created systems in a similar matter. Each time being iterated upon by new developers (us included).


# Purpose of New System

Create a manageable system using the MEAN (MySQL, Express, Angular, NodeJS) full-stack which can run on Facebook. The system is a Learning Management System which was created for underdeveloped regions to access through Facebook with no data charges. This system will be the 4th version of the platform.


# User Interface

### Landing Page

The landing page to LMS-FIU. Entry can be via the website's URL, or through Facebook's built-in web view. Authentication is granted through Facebook Login.

![FB_Profile_Name_NavBar](https://user-images.githubusercontent.com/48221791/91758496-1cdfa380-eb9e-11ea-944b-d973ba6d27e3.JPG)


### Course Library

Entry point to course library. Here, students can search for courses and enroll in them. Furthermore, the system lets the student know which courses they are enrolled in, or are pending for enrollment. (pending courses require instructor/administrator approval).

![Course-Library-LMSFIU](https://user-images.githubusercontent.com/48221791/91757067-c7a29280-eb9b-11ea-8916-ef81b93ec3e1.JPG)

### Course Modules (Student Dashboard)

This is the entry point to a course. Here, the student can access the content provided by the course. The content is added by an instructor who manages the course.

![Course-Modules-LMSFIU](https://user-images.githubusercontent.com/48221791/91757244-ff113f00-eb9b-11ea-932f-2407edc371b0.JPG)


### Student Dashboard

This is the entry point to the student's dashboard. Here, courses that the student is enrolled in are displayed.
The User Interface changes based on the role of the user. Here, the administrator/instructor can create announcements for courses and manage them.

![Student-Dashboard-LMSFIU](https://user-images.githubusercontent.com/48221791/91757310-194b1d00-eb9c-11ea-979e-047976c32d9e.JPG)

### Admin Dashboard

Here, admins can create and manage courses, and manage user roles. In this system, there are three roles: Admin, Instructor, and Student. Furthermore, the pending enrollments notification signifies that students have applied for enrollment and are awaiting for approval to enter the course. The admin is the one who decides the approval of entry.

![Admin_Dashboard](https://user-images.githubusercontent.com/48221791/91758689-662ff300-eb9e-11ea-8f85-1d0b98d5fbc2.JPG)

### Create Course Form

The admins can create courses through this form, and assign an instructor to teach it. The instructor can then add content to the course so that students can consume it.

![Create-Course-LMSFIU](https://user-images.githubusercontent.com/48221791/91757276-0c2e2e00-eb9c-11ea-932f-fc51e6f4f6f1.JPG)

# For developers

The application was generated using Angular CLI version 8.x, which was then updated to Angular and CLI version 9.x. To run, utilize the Angular CLI commands and npm commands of npm install -> ng serve once the application has been cloned to your computer.
