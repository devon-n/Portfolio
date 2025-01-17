A NextJS portfolio showcasing some of my work


Update styling
Add animation to theme toggle
speed improvements


Certainly! Here's a list of current color settings and their suggested replacements based on the new color scheme:

Replace:

text-primary-light dark:text-primary-dark with text-primary-light dark:text-primary-dark
border-primary-light dark:border-primary-dark with border-primary-light dark:border-primary-dark
Replace:

text-lime-400 with text-secondary-light dark:text-secondary-dark
border-lime-400 with border-secondary-light dark:border-secondary-dark
Replace:

bg-white with bg-surface-light dark:bg-surface-dark
Replace:

bg-dark and bg-dark-500 with bg-background-dark
Replace:

text-gray-700 with text-text-light dark:text-text-dark
Replace:

bg-gray-300 with bg-background-light dark:bg-background-dark
Replace:

from-gray-200 to-blue-300 with from-background-light to-primary-light dark:from-background-dark dark:to-primary-dark
Replace:

hover:text-primary-light dark:text-primary-dark with hover:text-primary-light dark:hover:text-primary-dark
Replace:

hover:text-lime-300 with hover:text-secondary-light dark:hover:text-secondary-dark
Replace:

text-blue-300 with text-primary-light dark:text-primary-dark
Replace:

text-lime-300 with text-secondary-light dark:text-secondary-dark
In globals.css, replace:

background-image: linear-gradient(to right bottom, #E5E7EB, #BFDBFE); with background-image: linear-gradient(to right bottom, var(--tw-color-background-light), var(--tw-color-primary-light));
In _app.tsx, replace:

bg-gradient-to-r from-gray-200 to-blue-300 dark:from-dark-500 dark:to-dark-700 with
bg-gradient-to-r from-background-light to-primary-light dark:from-background-dark dark:to-primary-dark
Remember to adjust any other custom color uses that might not be listed here. Also, make sure to test the changes in both light and dark modes to ensure everything looks good.