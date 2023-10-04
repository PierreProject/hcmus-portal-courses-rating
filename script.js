const theoreticalStructure = [5, 0, 4, 11, 0, 8, 0, 3];
const practicalStructure = [6, 0, 4, 11, 4, 0, 3];

/**
 * Automates the evaluation of questions with star ratings.
 * @param {boolean} isTheoretical - Indicates if it's the theoretical section.
 * @param {number} starRating - The default star rating for questions.
 */
function evaluateQuestions(isTheoretical, starRating) {
    const structure = isTheoretical ? theoreticalStructure : practicalStructure;
    
    for (let page = 0; page < structure.length; page++) {
        for (let row = 1; row <= structure[page]; row++) {
            // Always rate the internet question with 1 star
            const trueRating = (page === 0 && row === 3 + !isTheoretical) ? 1 : starRating;
            const radioSelector = `#section-${page} > div.section-questions-ranking > table:nth-child(${row}) > tbody > tr > td:nth-child(3) > input[type=radio]:nth-child(${trueRating})`;
            
            // Find and select the radio button
            const radioButton = document.querySelector(radioSelector);
            radioButton.checked = true;
        }
        
        // Click the "Next" button to move to the next page
        const nextButtonSelector = '#formActions > input[type=button]:nth-child(3)';
        const nextButton = document.querySelector(nextButtonSelector);
        nextButton.click();
    }
}

// Example usage:
// evaluateQuestions(true, 5); // For the theoretical section, rate questions with 5 stars.
// evaluateQuestions(false, 4); // For the practical section, rate questions with 4 stars.
