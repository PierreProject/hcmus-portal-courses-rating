# HCMUS-Auto-Rating

Automated JavaScript script for rating courses on the University of Science, VNU-HCM's portal.

This script was last updated till the day...

## Purpose

The purpose of this project is to automate the course evaluation process on the University of Science's portal. 
It allows users to quickly and easily rate multiple courses without the need for manual interaction.

## How to Use

To use this script, follow these steps:

1. For each course, click on the "Rate" button to open the course evaluation page.

2. Copy the content of the `script.js` file to your browser's console (F12 -> Console).

3. Call the `automateCourseEvaluation` function with the following parameters:

   - `isTheoretical`: Set to `true` for theoretical courses or `false` for practical courses.
   - `starRating`: Specify the star rating you want to assign to the course.

For example, if you want to evaluate a practical course and assign a 5-star rating to all questions, use the following function call:

```javascript
automateCourseEvaluation(false, 5);
```

```javasciprt
automateCourseEvaluation(true, 5); // For the theoretical section, rate questions with 5 stars.
automateCourseEvaluation(false, 4); // For the practical section, rate questions with 4 stars.
```