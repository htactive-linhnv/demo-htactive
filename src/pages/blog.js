import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />;
      <section className="main-container" style={{ marginTop: "10px" }}>
        <div className="container">
          <div className="row">
            {/* main start */}
            {/* ================ */}
            <div className="main col-md-12">
              <div className="masonry-grid row">
                {/* masonry grid item start */}
                <div className="masonry-grid-item col-sm-12 col-md-6 col-lg-4 col-lg-4">
                  {/* blogpost start */}
                  <article className="clearfix blogpost">
                    <div className="overlay-container">
                      <img
                        src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png"
                        alt="Những Material component tuyệt vời trong React Native."
                      />
                      <div className="overlay">
                        <div className="overlay-links">
                          <a href="blogPost">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="http://vjiat.vn/wp-content/uploads/2017/09/185_xuanvu_banner_tuyendung.jpg"
                            className="popup-img-single"
                            title="image title"
                          >
                            <i className="fa fa-search-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="blogpost-body">
                      <div className="post-info">
                        <span className="day">20</span>
                        <span className="month">Jun 2018</span>
                      </div>
                      <div className="blogpost-content">
                        <header>
                          <h2 className="title">
                            <a href="blogPost">
                              Junior - Senior Developer Wanted
                            </a>
                          </h2>
                          <div className="submitted">
                            <i className="fa fa-user pr-5" /> by{" "}
                            <a href="#">Hoàng Phạm</a>
                          </div>
                        </header>
                        <p>
                          Để đáp ứng nhu cầu phát triển, HT Active cần tuyển
                          nhiều vị trí lập trình viên Junior - Senior.
                        </p>
                      </div>
                    </div>
                    <footer className="clearfix hidden">
                      <ul className="links pull-left hidden">
                        <li>
                          <i className="fa fa-comment-o pr-5" />{" "}
                          <a href="#">22 comments</a> |
                        </li>
                        <li>
                          <i className="fa fa-tags pr-5" />{" "}
                          <a href="#">tag 1</a>
                        </li>
                      </ul>
                      <a
                        className="pull-right link"
                        href="news-detail/11/Junior-Senior-Developer-Wanted"
                      >
                        <span>Read more</span>
                      </a>
                    </footer>
                  </article>
                  {/* blogpost end */}
                </div>
                {/* masonry grid item end */}
                {/* masonry grid item start */}
                <div className="masonry-grid-item col-sm-12 col-md-6 col-lg-4 col-lg-4">
                  {/* blogpost start */}
                  <article className="clearfix blogpost">
                    <div className="overlay-container">
                      <img
                        src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png"
                        alt="Những Material component tuyệt vời trong React Native."
                      />
                      <div className="overlay">
                        <div className="overlay-links">
                          <a href="blogPost">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png"
                            className="popup-img-single"
                            title="image title"
                          >
                            <i className="fa fa-search-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="blogpost-body">
                      <div className="post-info">
                        <span className="day">15</span>
                        <span className="month">Jun 2018</span>
                      </div>
                      <div className="blogpost-content">
                        <header>
                          <h2 className="title">
                            <a href="news-detail/10/nhung-material-component-tuyet-voi-trong-react-native.">
                              Những Material component tuyệt vời trong React
                              Native.
                            </a>
                          </h2>
                          <div className="submitted">
                            <i className="fa fa-user pr-5" /> by{" "}
                            <a href="#">Mạnh Nguyễn</a>
                          </div>
                        </header>
                        <p>
                          Những Material component tuyệt vời trong React Native.
                        </p>
                      </div>
                    </div>
                    <footer className="clearfix hidden">
                      <ul className="links pull-left hidden">
                        <li>
                          <i className="fa fa-comment-o pr-5" />{" "}
                          <a href="#">22 comments</a> |
                        </li>
                        <li>
                          <i className="fa fa-tags pr-5" />{" "}
                          <a href="#">tag 1</a>
                        </li>
                      </ul>
                      <a
                        className="pull-right link"
                        href="news-detail/10/nhung-material-component-tuyet-voi-trong-react-native."
                      >
                        <span>Read more</span>
                      </a>
                    </footer>
                  </article>
                  {/* blogpost end */}
                </div>
                {/* masonry grid item end */}
                {/* masonry grid item start */}
                <div className="masonry-grid-item col-sm-12 col-md-6 col-lg-4 col-lg-4">
                  {/* blogpost start */}
                  <article className="clearfix blogpost">
                    <div className="overlay-container">
                      <img
                        src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png"
                        alt="Những Material component tuyệt vời trong React Native."
                      />
                      <div className="overlay">
                        <div className="overlay-links">
                          <a href="news-detail/9/tuyen-dung-junior-php-htactive">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="http://vjiat.vn/wp-content/uploads/2017/09/185_xuanvu_banner_tuyendung.jpg"
                            className="popup-img-single"
                            title="image title"
                          >
                            <i className="fa fa-search-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="blogpost-body">
                      <div className="post-info">
                        <span className="day">19</span>
                        <span className="month">Mar 2018</span>
                      </div>
                      <div className="blogpost-content">
                        <header>
                          <h2 className="title">
                            <a href="news-detail/9/tuyen-dung-junior-php-htactive">
                              2 Junior PHP Devs - Up to 10M
                            </a>
                          </h2>
                          <div className="submitted">
                            <i className="fa fa-user pr-5" /> by{" "}
                            <a href="#">Hoàng Phạm</a>
                          </div>
                        </header>
                        <p>
                          Để đáp ứng nhu cầu phát triển, HT Active cần tuyển 2
                          PHP Developer.
                        </p>
                      </div>
                    </div>
                    <footer className="clearfix hidden">
                      <ul className="links pull-left hidden">
                        <li>
                          <i className="fa fa-comment-o pr-5" />{" "}
                          <a href="#">22 comments</a> |
                        </li>
                        <li>
                          <i className="fa fa-tags pr-5" />{" "}
                          <a href="#">tag 1</a>
                        </li>
                      </ul>
                      <a
                        className="pull-right link"
                        href="news-detail/9/tuyen-dung-junior-php-htactive"
                      >
                        <span>Read more</span>
                      </a>
                    </footer>
                  </article>
                  {/* blogpost end */}
                </div>
                {/* masonry grid item end */}
                {/* masonry grid item start */}
                <div className="masonry-grid-item col-sm-12 col-md-6 col-lg-4 col-lg-4">
                  {/* blogpost start */}
                  <article className="clearfix blogpost">
                    <div className="overlay-container">
                      <img
                        src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png"
                        alt="Những Material component tuyệt vời trong React Native."
                      />
                      <div className="overlay">
                        <div className="overlay-links">
                          <a href="news-detail/8/reactjs-bai2">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://www.barcelonacodeschool.com/wp-content/uploads/2017/08/react-js.png"
                            className="popup-img-single"
                            title="image title"
                          >
                            <i className="fa fa-search-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="blogpost-body">
                      <div className="post-info">
                        <span className="day">17</span>
                        <span className="month">Nov 2017</span>
                      </div>
                      <div className="blogpost-content">
                        <header>
                          <h2 className="title">
                            <a href="news-detail/8/reactjs-bai2">
                              [ReactJS Tutorial] Bài 2 - JSX
                            </a>
                          </h2>
                          <div className="submitted">
                            <i className="fa fa-user pr-5" /> by{" "}
                            <a href="#">Hoàng Phạm</a>
                          </div>
                        </header>
                        <p>Bài dịch từ tutorialspoint.com</p>
                      </div>
                    </div>
                    <footer className="clearfix hidden">
                      <ul className="links pull-left hidden">
                        <li>
                          <i className="fa fa-comment-o pr-5" />{" "}
                          <a href="#">22 comments</a> |
                        </li>
                        <li>
                          <i className="fa fa-tags pr-5" />{" "}
                          <a href="#">tag 1</a>
                        </li>
                      </ul>
                      <a
                        className="pull-right link"
                        href="news-detail/8/reactjs-bai2"
                      >
                        <span>Read more</span>
                      </a>
                    </footer>
                  </article>
                  {/* blogpost end */}
                </div>
                {/* masonry grid item end */}
                {/* masonry grid item start */}
                <div className="masonry-grid-item col-sm-12 col-md-6 col-lg-4 col-lg-4">
                  <article className="clearfix blogpost">
                    <div className="overlay-container">
                      <img
                        src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png"
                        alt="Những Material component tuyệt vời trong React Native."
                      />
                      <div className="overlay">
                        <div className="overlay-links">
                          <a href="news-detail/7/reactjs-bai1">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://www.barcelonacodeschool.com/wp-content/uploads/2017/08/react-js.png"
                            className="popup-img-single"
                            title="image title"
                          >
                            <i className="fa fa-search-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="blogpost-body">
                      <div className="post-info">
                        <span className="day">17</span>
                        <span className="month">Nov 2017</span>
                      </div>
                      <div className="blogpost-content">
                        <header>
                          <h2 className="title">
                            <a href="news-detail/7/reactjs-bai1">
                              [ReactJS Tutorial] Bài 1 - Tổng quan
                            </a>
                          </h2>
                          <div className="submitted">
                            <i className="fa fa-user pr-5" /> by{" "}
                            <a href="#">Hoàng Phạm</a>
                          </div>
                        </header>
                        <p>Bài dịch từ tutorialspoint.com</p>
                      </div>
                    </div>
                    <footer className="clearfix hidden">
                      <ul className="links pull-left hidden">
                        <li>
                          <i className="fa fa-comment-o pr-5" />{" "}
                          <a href="#">22 comments</a> |
                        </li>
                        <li>
                          <i className="fa fa-tags pr-5" />{" "}
                          <a href="#">tag 1</a>
                        </li>
                      </ul>
                      <a
                        className="pull-right link"
                        href="news-detail/7/reactjs-bai1"
                      >
                        <span>Read more</span>
                      </a>
                    </footer>
                  </article>
                  {/* blogpost end */}
                </div>
                {/* masonry grid item end */}
                {/* masonry grid item start */}
                <div className="masonry-grid-item col-sm-12 col-md-6 col-lg-4 col-lg-4">
                  {/* blogpost start */}
                  <article className="clearfix blogpost">
                    <div className="overlay-container">
                      <img
                        src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png"
                        alt="Những Material component tuyệt vời trong React Native."
                      />
                      <div className="overlay">
                        <div className="overlay-links">
                          <a href="news-detail/6/scrum-quan-ly-du-an">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAw1AAAAJDlkZDM5ZjMzLTI4NjgtNDRhZC04ZjUyLWFjMDY4MzFkZGRlYg.png"
                            className="popup-img-single"
                            title="image title"
                          >
                            <i className="fa fa-search-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="blogpost-body">
                      <div className="post-info">
                        <span className="day">02</span>
                        <span className="month">Nov 2017</span>
                      </div>
                      <div className="blogpost-content">
                        <header>
                          <h2 className="title">
                            <a href="news-detail/6/scrum-quan-ly-du-an">
                              Áp dụng mô hình Scrum trong quản lý dự án
                            </a>
                          </h2>
                          <div className="submitted">
                            <i className="fa fa-user pr-5" /> by{" "}
                            <a href="#">Hoàng Phạm</a>
                          </div>
                        </header>
                        <p>
                          Scrum là một khung phát triển trong đó các nhóm
                          liên-chức năng phát triển các sản phẩm hoặc dự
                        </p>
                      </div>
                    </div>
                    <footer className="clearfix hidden">
                      <ul className="links pull-left hidden">
                        <li>
                          <i className="fa fa-comment-o pr-5" />{" "}
                          <a href="#">22 comments</a> |
                        </li>
                        <li>
                          <i className="fa fa-tags pr-5" />{" "}
                          <a href="#">tag 1</a>
                        </li>
                      </ul>
                      <a
                        className="pull-right link"
                        href="news-detail/6/scrum-quan-ly-du-an"
                      >
                        <span>Read more</span>
                      </a>
                    </footer>
                  </article>
                  {/* blogpost end */}
                </div>
                {/* masonry grid item end */}
                {/* masonry grid item start */}
                <div className="masonry-grid-item col-sm-12 col-md-6 col-lg-4 col-lg-4">
                  {/* blogpost start */}
                  <article className="clearfix blogpost">
                    <div className="overlay-container">
                      <img
                        src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png"
                        alt="Những Material component tuyệt vời trong React Native."
                      />
                      <div className="overlay">
                        <div className="overlay-links">
                          <a href="news-detail/5/tuyen-dung-junior-font-end-devs-htactive">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="http://vjiat.vn/wp-content/uploads/2017/09/185_xuanvu_banner_tuyendung.jpg"
                            className="popup-img-single"
                            title="image title"
                          >
                            <i className="fa fa-search-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="blogpost-body">
                      <div className="post-info">
                        <span className="day">28</span>
                        <span className="month">Sep 2017</span>
                      </div>
                      <div className="blogpost-content">
                        <header>
                          <h2 className="title">
                            <a href="news-detail/5/tuyen-dung-junior-font-end-devs-htactive">
                              05 Junior Front-end Devs - Up to 10M
                            </a>
                          </h2>
                          <div className="submitted">
                            <i className="fa fa-user pr-5" /> by{" "}
                            <a href="#">Thuận Hồ</a>
                          </div>
                        </header>
                        <p>
                          Để đáp ứng nhu cầu phát triển, HT Active cần tuyển 05
                          Front-end Developer.
                        </p>
                      </div>
                    </div>
                    <footer className="clearfix hidden">
                      <ul className="links pull-left hidden">
                        <li>
                          <i className="fa fa-comment-o pr-5" />{" "}
                          <a href="#">22 comments</a> |
                        </li>
                        <li>
                          <i className="fa fa-tags pr-5" />{" "}
                          <a href="#">tag 1</a>
                        </li>
                      </ul>
                      <a
                        className="pull-right link"
                        href="news-detail/5/tuyen-dung-junior-font-end-devs-htactive"
                      >
                        <span>Read more</span>
                      </a>
                    </footer>
                  </article>
                  {/* blogpost end */}
                </div>
                {/* masonry grid item end */}
                {/* masonry grid item start */}
                <div className="masonry-grid-item col-sm-12 col-md-6 col-lg-4 col-lg-4">
                  {/* blogpost start */}
                  <article className="clearfix blogpost">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item"
                        src="https://www.youtube.com/embed/Dv7gLpW91DM?ecver=2"
                      />
                    </div>
                    <div className="blogpost-body">
                      <div className="post-info">
                        <span className="day">18</span>
                        <span className="month">Sep 2017</span>
                      </div>
                      <div className="blogpost-content">
                        <header>
                          <h2 className="title">
                            <a href="news-detail/4/lap-trinh-cho-moi-nguoi">
                              Lập trình cho mọi người - Bài 1.
                            </a>
                          </h2>
                          <div className="submitted">
                            <i className="fa fa-user pr-5" /> by{" "}
                            <a href="#">Khiêm Trần</a>
                          </div>
                        </header>
                        <p>
                          Tôi đảm bảo 100% những người đang đọc bài viết này đều
                          biết sử dụng máy tính hoặc điện thoại di động, hoặc
                          máy tính bảng hoặc lọt vào những trường hợp còn lại.
                          Sở dĩ tôi biết được...
                        </p>
                      </div>
                    </div>
                    <footer className="clearfix hidden">
                      <ul className="links pull-left hidden">
                        <li>
                          <i className="fa fa-comment-o pr-5" />{" "}
                          <a href="#">22 comments</a> |
                        </li>
                        <li>
                          <i className="fa fa-tags pr-5" />{" "}
                          <a href="#">tag 1</a>
                        </li>
                      </ul>
                      <a
                        className="pull-right link"
                        href="news-detail/4/lap-trinh-cho-moi-nguoi"
                      >
                        <span>Read more</span>
                      </a>
                    </footer>
                  </article>
                  {/* blogpost end */}
                </div>
                {/* masonry grid item end */}
                {/* masonry grid item start */}
                <div className="masonry-grid-item col-sm-12 col-md-6 col-lg-4 col-lg-4">
                  {/* blogpost start */}
                  <article className="clearfix blogpost">
                    <div className="overlay-container">
                      <img
                        src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png"
                        alt="Những Material component tuyệt vời trong React Native."
                      />
                      <div className="overlay">
                        <div className="overlay-links">
                          <a href="news-detail/3/huong-dan-assembly-64-bit-bai-2">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://scontent.fdad3-2.fna.fbcdn.net/v/t31.0-0/p180x540/14054324_10154624375358984_2240899986652458346_o.jpg?oh=53816cd88c9c9eb2305b12fd8bcbd1de&oe=5A46DDF2"
                            className="popup-img-single"
                            title="image title"
                          >
                            <i className="fa fa-search-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="blogpost-body">
                      <div className="post-info">
                        <span className="day">17</span>
                        <span className="month">Sep 2017</span>
                      </div>
                      <div className="blogpost-content">
                        <header>
                          <h2 className="title">
                            <a href="news-detail/3/huong-dan-assembly-64-bit-bai-2">
                              Hướng dẫn Assembly 64bit - Bài 2.
                            </a>
                          </h2>
                          <div className="submitted">
                            <i className="fa fa-user pr-5" /> by{" "}
                            <a href="#">Khiêm Trần</a>
                          </div>
                        </header>
                        <p>
                          Tiếp theo bài trước, sau khi các bác đã có 1 chương
                          trình hoàn chỉnh hiển thị dòng chữ “Hello World!”, bài
                          này sẽ hướng dẫn các bạn viết một hàm hoàn chỉnh trong
                          assembly nhằm mục đích mô-đun hoá ứng dụng.
                        </p>
                      </div>
                    </div>
                    <footer className="clearfix hidden">
                      <ul className="links pull-left hidden">
                        <li>
                          <i className="fa fa-comment-o pr-5" />{" "}
                          <a href="#">22 comments</a> |
                        </li>
                        <li>
                          <i className="fa fa-tags pr-5" />{" "}
                          <a href="#">tag 1</a>
                        </li>
                      </ul>
                      <a
                        className="pull-right link"
                        href="news-detail/3/huong-dan-assembly-64-bit-bai-2"
                      >
                        <span>Read more</span>
                      </a>
                    </footer>
                  </article>
                  {/* blogpost end */}
                </div>
                {/* masonry grid item end */}
                {/* masonry grid item start */}
                <div className="masonry-grid-item col-sm-12 col-md-6 col-lg-4 col-lg-4">
                  {/* blogpost start */}
                  <article className="clearfix blogpost">
                    <div className="overlay-container">
                      <img
                        src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png"
                        alt="Những Material component tuyệt vời trong React Native."
                      />
                      <div className="overlay">
                        <div className="overlay-links">
                          <a href="news-detail/2/huong-dan-assembly-64-bit">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://scontent.fdad3-2.fna.fbcdn.net/v/t31.0-0/p180x540/14054324_10154624375358984_2240899986652458346_o.jpg?oh=53816cd88c9c9eb2305b12fd8bcbd1de&oe=5A46DDF2"
                            className="popup-img-single"
                            title="image title"
                          >
                            <i className="fa fa-search-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="blogpost-body">
                      <div className="post-info">
                        <span className="day">16</span>
                        <span className="month">Sep 2017</span>
                      </div>
                      <div className="blogpost-content">
                        <header>
                          <h2 className="title">
                            <a href="news-detail/2/huong-dan-assembly-64-bit">
                              Hướng dẫn Assembly 64bit.
                            </a>
                          </h2>
                          <div className="submitted">
                            <i className="fa fa-user pr-5" /> by{" "}
                            <a href="#">Khiêm Trần</a>
                          </div>
                        </header>
                        <p>
                          Suốt hàng ngàn năm, con người đã sử dụng các ngôn ngữ
                          lập trình để bắt máy tính phải “hiểu" mình và làm theo
                          mệnh lệnh của mình. Các bạn đừng bị thầy cô lừa dối,
                          bởi vì máy tính vốn chỉ hiểu một ngôn ngữ duy nhất, đó
                          là ngôn ngữ máy (machine code).
                        </p>
                      </div>
                    </div>
                    <footer className="clearfix hidden">
                      <ul className="links pull-left hidden">
                        <li>
                          <i className="fa fa-comment-o pr-5" />{" "}
                          <a href="#">22 comments</a> |
                        </li>
                        <li>
                          <i className="fa fa-tags pr-5" />{" "}
                          <a href="#">tag 1</a>
                        </li>
                      </ul>
                      <a
                        className="pull-right link"
                        href="news-detail/2/huong-dan-assembly-64-bit"
                      >
                        <span>Read more</span>
                      </a>
                    </footer>
                  </article>
                  {/* blogpost end */}
                </div>
                {/* masonry grid item end */}
                {/* masonry grid item start */}
                <div className="masonry-grid-item col-sm-12 col-md-6 col-lg-4 col-lg-4">
                  {/* blogpost start */}
                  <article className="clearfix blogpost">
                    <div className="overlay-container">
                      <img
                        src="https://s3-ap-southeast-1.amazonaws.com/htactive/blogs/components_react_native.png"
                        alt="Những Material component tuyệt vời trong React Native."
                      />
                      <div className="overlay">
                        <div className="overlay-links">
                          <a href="news-detail/1/hello-world-voi-swift">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://www.techworm.net/wp-content/uploads/2018/03/wc-swift.jpg"
                            className="popup-img-single"
                            title="image title"
                          >
                            <i className="fa fa-search-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="blogpost-body">
                      <div className="post-info">
                        <span className="day">15</span>
                        <span className="month">Sep 2017</span>
                      </div>
                      <div className="blogpost-content">
                        <header>
                          <h2 className="title">
                            <a href="news-detail/1/hello-world-voi-swift">
                              Hello World với Swift
                            </a>
                          </h2>
                          <div className="submitted">
                            <i className="fa fa-user pr-5" /> by{" "}
                            <a href="#">Hiếu Lê</a>
                          </div>
                        </header>
                        <p>
                          Hôm nay mình sẽ hướng dẫn các bạn viết chương trình
                          Hello World sử dụng Swift. Để bắt đầu, chúng ta sẽ
                          viết 1 chương trình đơn giản như sau ...
                        </p>
                      </div>
                    </div>
                    <footer className="clearfix hidden">
                      <ul className="links pull-left hidden">
                        <li>
                          <i className="fa fa-comment-o pr-5" />{" "}
                          <a href="#">22 comments</a> |
                        </li>
                        <li>
                          <i className="fa fa-tags pr-5" />{" "}
                          <a href="#">tag 1</a>
                        </li>
                      </ul>
                      <a
                        className="pull-right link"
                        href="news-detail/1/hello-world-voi-swift"
                      >
                        <span>Read more</span>
                      </a>
                    </footer>
                  </article>
                  {/* blogpost end */}
                </div>
                {/* masonry grid item end */}
              </div>
              {/* masonry grid end */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Blog
