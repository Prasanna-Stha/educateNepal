function popularCourse() {
    document.getElementsByClassName('courseSection')[0].style.display = 'none';
    document.getElementsByClassName('popularCourseSection')[0].style.display = 'flex';
    document.getElementById('popularCourse').style.fontWeight = 'bold';
    document.getElementById('popularCourse').style.borderBottom = '2px solid grey';
}

function featuredCourse() {
    document.getElementsByClassName('courseSection')[0].style.display = 'flex';
    document.getElementById('featuredCourse').style.fontWeight = 'bold';
    document.getElementById('featuredCourse').style.borderBottom = '2px solid grey';
}