// 'use strict';
// let score = 0
// let userName = prompt('Please enter your name:');
// alert('Nice to see you here ' + userName + ', Welcome!');
// alert('We will play a gussing yes/no game, before you enter my page. I hope you\'re ready and excited!');


// function education() {
//     let education = prompt('Am I studied Business in my bechlor degree?');

//     while (education !== 'yes' && education !== 'y' && education !== 'no' && education !== 'n') {
//         education = prompt('please enter only yes/no or y/n');
//     }

//     switch (education.toLowerCase()) {
//         case 'yes':
//         case 'y':
//             alert('That\'s correct');
//             score++
//             break;

//         case 'no':
//         case 'n':
//             alert('Sorry, I guess we need to know each other more');
//             break;

//         default:
//             alert('please enter only yes/no or y/n');
//             break;
//     }
// }
// education();




// function color() {
//     let color = prompt('Is black my favourite color?');

//     while (color !== 'yes' && color !== 'y' && color !== 'no' && color !== 'n') {
//         color = prompt('please enter only yes/no or y/n');
//     }

//     switch (color.toLocaleLowerCase()) {
//         case 'yes':
//         case 'y':
//             alert('That\'s correct');
//             score++
//             break;

//         case 'no':
//         case 'n':
//             alert('Sorry, I guess we need to know each other more');
//             break;

//         default:
//             alert('please enter only yes/no or y/n');
//             break;
//     }
// }
// color();

// function favHobby() {
//     let hobby = prompt('Is writing my favourite hobby?');

//     while (hobby !== 'yes' && hobby !== 'y' && hobby !== 'no' && hobby !== 'n') {
//         hobby = prompt('please enter only yes/no or y/n');
//     }

//     switch (hobby.toLocaleLowerCase()) {
//         case 'yes':
//         case 'y':
//             alert('That\'s correct');
//             score++
//             break;

//         case 'no':
//         case 'n':
//             alert('Sorry, I guess we need to know each other more');
//             break;

//         default:
//             alert('please enter only yes/no or y/n');
//             break;
//     }
// }
// favHobby();

// function favSport() {
//     let sport = prompt('Is football my favourite sport?');

//     while (sport !== 'yes' && sport !== 'y' && sport !== 'no' && sport !== 'n') {
//         sport = prompt('please enter only yes/no or y/n');
//     }

//     switch (sport.toLocaleLowerCase()) {
//         case 'yes':
//         case 'y':
//             alert('Sorry, I guess we need to know each other more');
//             break;

//         case 'no':
//         case 'n':
//             alert('you\'re correct, my favourite sport is MMA and Boxing');
//             score++
//             break;

//         default:
//             alert('please enter only yes/no or y/n');
//             break;
//     }
// }
// favSport();


// function myHeight() {
//     let height = prompt('Is my height more than 180cm? ');


//     while (height !== 'yes' && height !== 'y' && height !== 'no' && height !== 'n') {
//         height = prompt('please enter only yes/no or y/n');
//     }

//     switch (height.toLocaleLowerCase()) {
//         case 'yes':
//         case 'y':
//             alert('you\'re correct :D ');
//             score++
//             break;

//         case 'no':
//         case 'n':
//             alert('Sorry, I guess we need to know each other more');
//             break;

//         default:
//             alert('please enter only yes/no or y/n');
//             break;
//     }
// }
// myHeight();

// alert('Welcome to my page ' + userName);


function queHeight() {
    let exactHeight = prompt('What do you think my exact height is? (insert a number)');
    let check = true;
    let attemptsAvailable = 3

    for (let i = 0; i <= 2; i++) {
        if (exactHeight > 190) {
            exactHeight = prompt('Too high, you have ' + attemptsAvailable + ' attempts left')
            attemptsAvailable--
        } else if (exactHeight < 190) {
            exactHeight = prompt('Too low, you have ' + attemptsAvailable + ' attempts left');
            attemptsAvailable--
        } else if (exactHeight == 190) {
            alert('you\'r correct')
            score++
            check = false;
            break;
        }
    }

    if (check == true) {
        alert('In case you did not get it, the correct answer is 190 cm :D ');
    }
}
queHeight();


function queSmartPhones() {
    let smartPhones = ['samsung', 'google', 'apple', 'nokia'];
    let Question = prompt('What are my favourate smartphones?');
    let check2 = true;
    let ii = 5
    // we did nested for loop to loop over each element in the array.

    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j < smartPhones.length; j++) {
            if (Question == smartPhones[j]) {
                alert('You are right')
                score++;
                check2 = false;
                break;
            }

        }
        if (check2) {
            Question = prompt('try again you have ' + ii + ' attempts left');
            ii--
        } else {
            break;
        }
    }

    if (check2 == true) {
        alert('in case you did not know the answer, it was samsung, apple, google or nokia')
    }
}
queSmartPhones();


alert(userName + ' you got ' + score + ' out of 7');