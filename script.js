* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f4f6f9;
    color: #333;
}

header {
    background: #0a192f;
    padding: 15px 40px;
    position: fixed;
    width: 100%;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    color: white;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

.hero {
    background: #112240;
    color: white;
    text-align: center;
    padding: 150px 20px 100px;
}

.btn {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background: #64ffda;
    text-decoration: none;
    color: black;
    font-weight: bold;
}

.section {
    padding: 80px 40px;
    text-align: center;
}

.skills span {
    display: inline-block;
    background: #0a192f;
    color: white;
    padding: 8px 15px;
    margin: 5px;
    border-radius: 20px;
}

.card {
    background: white;
    padding: 20px;
    margin: 15px auto;
    width: 70%;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

footer {
    background: #0a192f;
    color: white;
    text-align: center;
    padding: 15px;
}