// init
let inputSearch = document.getElementById("input-search-course");
let renderCourseList = document.getElementById("render-course-list");
let html;
let htmls;

// fake Data
let arrCourses = [
  {
    id: 1,
    price: 1200000,
    bgImageCourse: "./assets/images/front-end-course.png",
    avtImageMentor: "./assets/images/avatar-mentor-2.jpg",
    nameCourse: "Front end Basic",
    nameMentor: "Mentor Cường",
    desc: "Khóa học Frontend là quy trình sử dụng các ngôn ngữ HTML, CSS, JavaScript để thiết kế, xây dựng giao diện cho trang web hoặc ứng dụng web, giúp người dùng có thể xem và tương tác trực tiếp trên đó. Mục tiêu của việc thiết kế trang web là giúp người dùng dễ dàng sử dụng khi mở trang web.",
    time: "20h",
    quantity: "110 học viên",
    slot: "32 slot",
    isMentor: true,
    isMember: false,
    memberLearned: false,
  },
  {
    id: 2,
    price: 1200000,
    bgImageCourse: "./assets/images/reactjs-banner.png",
    avtImageMentor: "./assets/images/avatar-mentor-2.jpg",
    nameCourse: "ReactJS Basic",
    nameMentor: "Mentor Cường",
    desc: "Khóa học Lập trình ReactJS - JS Framework hướng dẫn học viên làm chủ ReactJS và sử dụng ReactJS trong các ứng dụng thực tế. Thông qua kiến thức của khóa học này, học viên hoàn toàn có thể tự tìm hiểu các Javascript Framework khác như Angular, VueJS, NextJS, NuxtJS",
    time: "20h",
    quantity: "90 học viên",
    slot: "20 slot",
    isMentor: true,
    isMember: false,
    memberLearned: false,
  },
];

// handle map
htmls = arrCourses.map((course) => {
  console.log("c", course);
  return `
    <div class="col-lg-4 mb-3">
        <div class="card card-course-custom position-relative">
            <div class="price-cost">${course.price} đ</div>
            <img
                src="${course.bgImageCourse}"
                class="card-img-top"
                alt="hinh-anh-front-end-banner"
            />
            <div class="card-body position-relative">
                <img src="${
                  course.avtImageMentor
                }" class="avatar-mentor" alt="avatar-mentor">
                <h5 class="card-title d-flex align-items-center">
                    <a href="./course-detail.html" id="name-course">${
                      course.nameCourse
                    }</a>
                    <img src="./assets/images/icon-title-course.png" class="icon-title-course" alt="icon-title-course">
                </h5>
                <p class="sub-title">${course.nameMentor}</p>
                <p class="description">${course.desc}</p>
                <div class="testi-rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <div class="feedback-time">
                    <span class="time">
                    <img src='./assets/images/clock-time.png' class="icon-time" alt="hinh-anh-front-end-icontime">
                        <i class="cl-icon-clock" ></i> ${course.time}
                    </span>
                    <span class="time">
                        <img src="./assets/images/user.png" class="icon-user" alt="hinh-anh-front-end-iconuser">
                        <i class="cl-icon-user" ></i> ${course.quantity}
                    </span>
                    <span class="mark">
                        <img src="./assets/images/check-mark.png" class="icon-V" alt="hinh-anh-front-end-iconV">
                        <i class="cl-icon-V" ></i> ${course.slot}
                    </span>
                </div>   

                <hr />

                <div id="btnShow">
                    <a
                        id="linkSign"
                        href="./course-detail.html"
                        class="btn btn-primary-custom"
                    > Xem chi tiết </a>

                    ${
                      course.isMentor
                        ? ""
                        : `
                            <a
                                id="linkIntro"
                                href="#"
                                class="btn btn-outline-secondary-custom w-100 p-3"
                            > Mã giới thiệu </a>
                          `
                    }

                    ${
                      course.isMember && course.memberLearned
                        ? `
                        <a
                          id="linkIntro"
                          href="#"
                          class="btn btn-outline-secondary-custom w-100 p-3"
                        >
                          Mã giới thiệu
                        </a>
                        `
                        : ""
                    }
                </div>
            </div>
        </div>
    </div>
    `;
});

// render -> UI
html = htmls.join("");
renderCourseList.innerHTML = html;

// handle search name course when change input
inputSearch.addEventListener("keyup", function () {
  if (inputSearch.value == "") {
    renderCourseList.innerHTML = html;
    return;
  }
  for (let i = 0; i < arrCourses.length; i++) {
    console.log("arrCourses[i]", arrCourses[i]);

    if (arrCourses[i].nameCourse.includes(inputSearch.value.toUpperCase())) {
      console.log("->", arrCourses[i]);
      return (renderCourseList.innerHTML = `
              <div class="col-lg-4 mb-3">
              <div class="card card-course-custom position-relative">
                  <div class="price-cost">${arrCourses[i].price} đ</div>
                  <img
                      src="${arrCourses[i].bgImageCourse}"
                      class="card-img-top"
                      alt="hinh-anh-front-end-banner"
                  />
                  <div class="card-body position-relative">
                      <img src="${
                        arrCourses[i].avtImageMentor
                      }" class="avatar-mentor" alt="avatar-mentor">
                      <h5 class="card-title d-flex align-items-center">
                          <a href="./course-detail.html" id="name-course">${
                            arrCourses[i].nameCourse
                          }</a>
                          <img src="./assets/images/icon-title-course.png" class="icon-title-course" alt="icon-title-course">
                      </h5>
                      <p class="sub-title">${arrCourses[i].nameMentor}</p>
                      <p class="description">${arrCourses[i].desc}</p>
                      <div class="testi-rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                      </div>
                      <div class="feedback-time">
                          <span class="time">
                          <img src='./assets/images/clock-time.png' class="icon-time" alt="hinh-anh-front-end-icontime">
                              <i class="cl-icon-clock" ></i> ${
                                arrCourses[i].time
                              }
                          </span>
                          <span class="time">
                              <img src="./assets/images/user.png" class="icon-user" alt="hinh-anh-front-end-iconuser">
                              <i class="cl-icon-user" ></i> ${
                                arrCourses[i].quantity
                              }
                          </span>
                          <span class="mark">
                              <img src="./assets/images/check-mark.png" class="icon-V" alt="hinh-anh-front-end-iconV">
                              <i class="cl-icon-V" ></i> ${arrCourses[i].slot}
                          </span>
                      </div>   
  
                      <hr />
  
                      <div id="btnShow">
                          <a
                              id="linkSign"
                              href="./course-detail.html"
                              class="btn btn-primary-custom"
                          > Xem chi tiết </a>
  
                          ${
                            arrCourses[i].isMentor
                              ? ""
                              : `
                                  <a
                                      id="linkIntro"
                                      href="#"
                                      class="btn btn-outline-secondary-custom w-100 p-3"
                                  > Mã giới thiệu </a>
                                  `
                          }
  
                          ${
                            arrCourses[i].isMember &&
                            arrCourses[i].memberLearned
                              ? `
                              <a
                                  id="linkIntro"
                                  href="#"
                                  class="btn btn-outline-secondary-custom w-100 p-3"
                              >
                                  Mã giới thiệu
                              </a>
                              `
                              : ""
                          }
                      </div>
                  </div>
              </div>
          </div>
        `);
    }
  }
});

// handle button click search
function handleSearchCourseBtn() {
  for (let i = 0; i < arrCourses.length; i++) {
    console.log("arrCourses[i]", arrCourses[i]);

    if (arrCourses[i].nameCourse == inputSearch.value) {
      console.log("->", arrCourses[i]);
      return (renderCourseList.innerHTML = `
                  <div class="col-lg-4 mb-3">
                  <div class="card card-course-custom position-relative">
                      <div class="price-cost">${arrCourses[i].price} đ</div>
                      <img
                          src="${arrCourses[i].bgImageCourse}"
                          class="card-img-top"
                          alt="hinh-anh-front-end-banner"
                      />
                      <div class="card-body position-relative">
                          <img src="${
                            arrCourses[i].avtImageMentor
                          }" class="avatar-mentor" alt="avatar-mentor">
                          <h5 class="card-title d-flex align-items-center">
                              <a href="./course-detail.html" id="name-course">${
                                arrCourses[i].nameCourse
                              }</a>
                              <img src="./assets/images/icon-title-course.png" class="icon-title-course" alt="icon-title-course">
                          </h5>
                          <p class="sub-title">${arrCourses[i].nameMentor}</p>
                          <p class="description">${arrCourses[i].desc}</p>
                          <div class="testi-rating">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                          </div>
                          <div class="feedback-time">
                              <span class="time">
                              <img src='./assets/images/clock-time.png' class="icon-time" alt="hinh-anh-front-end-icontime">
                                  <i class="cl-icon-clock" ></i> ${
                                    arrCourses[i].time
                                  }
                              </span>
                              <span class="time">
                                  <img src="./assets/images/user.png" class="icon-user" alt="hinh-anh-front-end-iconuser">
                                  <i class="cl-icon-user" ></i> ${
                                    arrCourses[i].quantity
                                  }
                              </span>
                              <span class="mark">
                                  <img src="./assets/images/check-mark.png" class="icon-V" alt="hinh-anh-front-end-iconV">
                                  <i class="cl-icon-V" ></i> ${
                                    arrCourses[i].slot
                                  }
                              </span>
                          </div>   
      
                          <hr />
      
                          <div id="btnShow">
                              <a
                                  id="linkSign"
                                  href="./course-detail.html"
                                  class="btn btn-primary-custom"
                              > Xem chi tiết </a>
      
                              ${
                                arrCourses[i].isMentor
                                  ? ""
                                  : `
                                      <a
                                          id="linkIntro"
                                          href="#"
                                          class="btn btn-outline-secondary-custom w-100 p-3"
                                      > Mã giới thiệu </a>
                                      `
                              }
      
                              ${
                                arrCourses[i].isMember &&
                                arrCourses[i].memberLearned
                                  ? `
                                  <a
                                      id="linkIntro"
                                      href="#"
                                      class="btn btn-outline-secondary-custom w-100 p-3"
                                  >
                                      Mã giới thiệu
                                  </a>
                                  `
                                  : ""
                              }
                          </div>
                      </div>
                  </div>
              </div>
            `);
    }
  }
}
