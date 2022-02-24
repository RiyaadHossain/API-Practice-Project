/* ====================================== API চেকলিস্ট ====================================== */

/* ১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। */

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((json) => console.log(json));

/* ২. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে। */

const addComment = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((json) => printComment(json));
};

const commentContainer = document.getElementById("comment-container");
let count = 0;
const printComment = (data) => {
  data.forEach((element) => {
    count++;
    const para = document.createElement("p");
    para.classList.add("comment-box");
    para.setAttribute("onclick", `commentDetails(${element.id})`);
    para.innerHTML = `<strong>comment No-${count}:</strong> ${element.body}`;
    commentContainer.appendChild(para);
  });
};

/* ৩. আরেকটা সিস্টেম হবে। তুমি যে ডাটা লোড করেছো। সেটা কোন বাটনে ক্লিক করা লাগবে না। ওয়েবসাইট লোড হলেই সরাসরি ডাটা লোড হয়ে তারপর সেই ডাটা ওয়েবসাইট এ দেখাবে। চেষ্টা করবে লোড করা ডাটা এর দুইটা প্রপার্টি অবশ্যই দেখাবে। */

const loadUserName = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url)
    .then((res) => res.json())
    .then((json) => printAutoComment(json));
};

const commentAuto = document.getElementById("comment-container-auto");
let countEmail = 0;
const printAutoComment = (json) => {
  json.forEach((element) => {
    countEmail++;
    const newPara = document.createElement("p");
    newPara.classList.add("comment-box");
    newPara.innerHTML = `<strong>${countEmail}. User Email: </strong>${element.email}`;
    // commentAuto.appendChild(newPara);
  });
};

loadUserName(); 

/* ৪. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা। */   /* ~ Yes, I did it */

/* ৫. ডাইনামিক ডাটা লোড। কোন একটা কমেন্ট এ ক্লিক করলে (কমেন্ট এর div এ বা কোন একটা বাটন এ )সেই কমেন্ট এর আইডি নিয়ে সেটা api এর url এ বসিয়ে (ডাইনামিকভাবে টেমপ্লেট স্ট্রিং দিয়ে) সেই ডাটা লোড করে। সেই ডাটা ওয়েবসাইট এ দেখাতে পারতেছো কিনা। */

const commentDetails = (commentID) => {
  const url = `https://jsonplaceholder.typicode.com/comments/${commentID}`

  fetch(url)
  .then(res => res.json())
  .then(json => printComDetails(json))
}

const commentID = document.getElementById('comment-id')
const UserName = document.getElementById('user-name')
const comment = document.getElementById('comment')

const printComDetails = data => {
  commentID.innerText = data.id
  UserName.innerText = data.email
  comment.innerText = data.body
}

/* ৬. randomuser এর ওয়েবসাইট এ গিয়ে (randomuser.me) এ গিয়ে সেখান থেকে ডাটা লোড করবে। তারপর ইউজারের ছবি দেখাবে। শুধু সেটাও না। ইউজারের location এর মধ্যে যত কিছু আছে। সব দেখাবে ওয়েবসাইট এ। অর্থাৎ street, city, coordinates, timezone যেকোন একভাবে দেখলেই হবে। তবে দেখাতে হবে।  */

const nextPerson = () => {
  const url = 'https://randomuser.me/api/'
  fetch(url)
  .then(res => res.json())
  .then(json => printPerson(json))
}

const perosnContainer = document.getElementById('person-details')

const printPerson = data => {
  const user = data.results[0]
  console.log(user)
  perosnContainer.innerHTML = `
  <div class="card text-center" style="width: 22rem;">
        <img src="${user.picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
          <p class="card-text">
          <h6>Location:${user.location.city}, ${user.location.country}</h6>
              <h6>Phone:${user.phone}</h6>
              <h6>E-mail:${user.email}</h6>
          </p>
          <button onclick="nextPerson()" class="btn btn-primary">Next Person</button>
        </div>
      </div>
  `
}


/* ৭. network ট্যাব একটু ভালো করে দেখো। দরকার হলে। গুগলে সার্চ দিয়ে বা ইউটিউবে ভিডিও দেখে ফেলো। এখন বেশিরভাগ জিনিস বুঝতে না পারলেও দেখে ফেলো। ফিউচারে কাজে লাগবে।  */ 

/* ====================================== চ্যালেঞ্জ-১ ====================================== */

/* the meal db এর খালতো ভাই the sports db থেকে কিছু জিনিস এনে দেখাবে। একজাক্টলি কি দেখাতে হবে। সেটা আমি বলে দিবো না। তুমি ওদের ওয়েবসাইট এ যাও। সেখানে কি কি লেখা আছে সেগুলা পড়ো। api গুলা এর ছোট করে কি কি করে বলা আছে। সেগুলা দেখো। তারপর কিছু ডাটা লোড করো। সেই ডাটাগুলো দেখাও। এইখানে সার্চ ফাংশনালিটি ইমপ্লিমেন্ট করো। অনেকটা mealdb এর মতো। আবার কোন একটাতে ক্লিক করলে সেটার ডিটেল দেখাবে। */

/* ====================================== চ্যালেঞ্জ-২ ====================================== */

/* দেখো sports db এর জন্য যে ওয়েবসাইট বানাবে সেখানে একটা লোডিং স্পিনার যোগ করতে পারো কিনা। জিনিসটা একটু কঠিন মনে হতে পারে। তাও দেখানোর চেষ্টা করো। এইটা আমরা এক সময় দেখিয়ে দেব। তবে তার আগে তুমি দেখো গুগলে সার্চ দিয়ে কিছু বের করতে পারো কিনা।  */

/* ====================================== চ্যালেঞ্জ-৩ ====================================== */

/* অনলাইন থেকে API খুঁজে বের করো। হয়তো দেখবে API key চায়। সেটা কিভাবে করবে বুঝতে পারবে না। টেনশন এর কিছু নাই। আমরা সেগুলা দেখিয়ে দিবো ফিউচারে। তারপরেও দেখো কোন API খুঁজে পাও কিনা। এবং সে API ইউজ করতে পারো কিনা। */
