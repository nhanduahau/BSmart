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
  {
    id: 3,
    price: 1200000,
    bgImageCourse: "./assets/images/reactjs-intermediate.png",
    avtImageMentor: "./assets/images/avatar-mentor-2.jpg",
    nameCourse: "ReactJS Intermediate",
    nameMentor: "Mentor Cường",
    desc: "Khóa học gồm hơn 15 bài tập và dự án vô cùng thực tế tất tần tật về ReactJS từ Component, Binding, Sự kiện, Render, State, Cơ chế truyền dữ liệu, Lifecycle, Pure Component, Redux, Context, Hook, React Animation, Hook Animation, Kết nối Backend qua Restful API...Các kiến thức này cực kì cần thiết để bạn nhận việc và làm ngay cho doanh nghiệp.",
    time: "20h",
    quantity: "106 học viên",
    slot: "26 slot",
    isMentor: true,
    isMember: false,
    memberLearned: false,
  },
  {
    id: 4,
    price: 1200000,
    bgImageCourse: "./assets/images/reactjs-expert.jpg",
    avtImageMentor: "./assets/images/avatar-mentor-2.jpg",
    nameCourse: "ReactJS Expert",
    nameMentor: "Mentor Cường",
    desc: "Hoạt động với mong muốn mang đến cho các lập trình viên một thư viện dữ liệu dồi dào và miễn phí và Reactjs. Không những thế, thư viện cũng chính là nơi để mọi người có thể tham gia thảo luận về các kiến thức, kinh nghiệm cùng đề tài mà mình đang thực hiện.",
    time: "20h",
    quantity: "106 học viên",
    slot: "26 slot",
    isMentor: true,
    isMember: false,
    memberLearned: false,
  },
  {
    id: 5,
    price: 1200000,
    bgImageCourse: "./assets/images/php-basic.png",
    avtImageMentor: "./assets/images/avatar-mentor-2.jpg",
    nameCourse: "PHP Basic",
    nameMentor: "Mentor Cường",
    desc: "Khóa học đào tạo cấp tốc để trở thành lập trình viên PHP chuyên nghiệp cho người mới bắt đầu. Học cùng với chuyên gia nhiều năm kinh nghiệm trong nghề. Tự code các dự án thực tế ngay trong buổi học.",
    time: "20h",
    quantity: "106 học viên",
    slot: "26 slot",
    isMentor: true,
    isMember: false,
    memberLearned: false,
  },
  {
    id: 6,
    price: 1200000,
    bgImageCourse: "./assets/images/devops-course-banner.png",
    avtImageMentor: "./assets/images/avatar-mentor-2.jpg",
    nameCourse: "Devops Basic",
    nameMentor: "Mentor Cường",
    desc: "Với 15 buổi học, kết hợp giữa lý thuyết và những bài thực hành thực tiễn, học viên học tại BSmart sẽ có cơ hội tiếp cận xu hướng làm việc mới, hiện đại hơn, có khả năng sử dụng các công cụ hỗ trợ cho những teams đã, đang và sẽ triển khai theo mô hình Devops. Khóa học DevOps on AWS của BSmart được thiết kế dựa trên việc tổng hợp những kinh nghiệm và kỹ năng thực tiễn trong quá trình làm dự án thực tế, đồng thời cập nhật và tổng hợp từ nhiều nguồn khác nhau, từ đó giúp học viên có cái nhìn bao quát và rõ nhất về Devops.",
    time: "20h",
    quantity: "106 học viên",
    slot: "26 slot",
    isMentor: true,
    isMember: false,
    memberLearned: false,
  },
  {
    id: 7,
    price: 1200000,
    bgImageCourse: "./assets/images/net-course-banner.jpg",
    avtImageMentor: "./assets/images/avatar-mentor-2.jpg",
    nameCourse: ".NET Core Basic",
    nameMentor: "Mentor Cường",
    desc: "Khóa học lập trình asp.net dành cho các bạn sinh viên khoa CNTT các trường Trung cấp - Cao đẳng - Đại học . Và tất cả các đối tượng yêu thích, đam mê và mong muốn trở thành lập trình viên công nghệ .NET",
    time: "20h",
    quantity: "106 học viên",
    slot: "26 slot",
    isMentor: true,
    isMember: false,
    memberLearned: false,
  },
  {
    id: 8,
    price: 1200000,
    bgImageCourse: "./assets/images/net-mvc-course.png",
    avtImageMentor: "./assets/images/avatar-mentor-2.jpg",
    nameCourse: ".NET Core MVC",
    nameMentor: "Mentor Cường",
    desc: "Khóa học này là khóa học thứ 3 của các bạn giúp các bạn có cái nhìn tổng quan và các bước để xây dựng một dự án thực tế sử dụng ASP.NET MVC. Khóa học này mình xây dựng không theo một giáo trình nào mà đi thẳng vào thực tế dự án.",
    time: "20h",
    quantity: "106 học viên",
    slot: "26 slot",
    isMentor: true,
    isMember: false,
    memberLearned: false,
  },
  {
    id: 9,
    price: 1200000,
    bgImageCourse: "./assets/images/net-api-course.jpg",
    avtImageMentor: "./assets/images/avatar-mentor-2.jpg",
    nameCourse: ".NET Core API",
    nameMentor: "Mentor Cường",
    desc: "Khoá học này thiết kế theo phương pháp mới xây dựng một REST API chuẩn REST từng bước sau đó refactoring code theo Design Pattern.",
    time: "20h",
    quantity: "106 học viên",
    slot: "26 slot",
    isMentor: true,
    isMember: false,
    memberLearned: false,
  },
];

// handle map
htmls = arrCourses.map((course) => {
  console.log("c", course);
  return `
    <div class="col-xl-4 col-lg-6 mb-3">
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
                    <img src="/assets/images/icon-title-course.png" class="icon-title-course" alt="icon-title-course">
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
                          <img src="/assets/images/icon-title-course.png" class="icon-title-course" alt="icon-title-course">
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
                              <img src="/assets/images/icon-title-course.png" class="icon-title-course" alt="icon-title-course">
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
