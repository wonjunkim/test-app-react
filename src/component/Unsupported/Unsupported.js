import React from 'react';
import { BrowserRouter as Router, Link, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route'

class Unsupported extends React.Component {
  render() {
    return (
      <div id="unsupport_area" className="unsupport_area">
        <div className="unsupport_inner">
          <span className="icon_caution"></span>
          <strong id="unsupport_title" className="unsupport_title">현재 브라우저는 서비스가 지원하지 않는 사용환경입니다.</strong>
          <p id="unsupport_text" className="unsupport_text">아래의 브라우저를 사용하면 서비스를 원활히 이용하실 수 있습니다.</p>
          <ul className="list_unsupport">
            <li className="item_unsupport">
              <NavLink to="/whale" className="link_unsupport">
                <span className="icon_unsupport whale"></span>
                Whale
              </NavLink>
            </li>
            <li className="item_unsupport">
              <NavLink to="/chrome" className="link_unsupport">
                <span className="icon_unsupport chrome"></span>
                Chrome
              </NavLink>
            </li>
            <li className="item_unsupport">
              <NavLink to="/firefox" className="link_unsupport">
                <span className="icon_unsupport firefox"></span>
                Firefox
              </NavLink>
            </li>
            <li className="item_unsupport">
              <NavLink to="/safari" className="link_unsupport">
                <span className="icon_unsupport safari"></span>
                Safari
              </NavLink>
            </li>
          </ul>
          <a href="//map.naver.com" className="link_naver">지도로 돌아가기</a>
        </div>
        <div className="unsupport_dimmded"></div>
      </div>
    )
  }
}

export default Unsupported;