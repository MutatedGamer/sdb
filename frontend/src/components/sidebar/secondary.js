import React, {Fragment} from "react";
import {
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import SecondaryBackButton from './secondaryBackButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import * as ROUTES from '../../constants/routes';

export default function SidebarSecondary(props) {

  const loginLink = <NavItem>
    <NavLink href={ROUTES.LOGIN}>Login</NavLink>
  </NavItem>

  const signoutLink = <Fragment>
      <NavItem>
        <NavLink href="">
          Logged in as {props.user && props.user.username}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href={ROUTES.SIGN_OUT}>Sign out</NavLink>
      </NavItem>
    </Fragment>

  return (
    <div id="sidebar-secondary" className={`sidebar ${props.open ? "active" : ""}`}>
      <Nav>
        <SecondaryBackButton color={props.color}>
          <NavItem id={props.backId}>
            <NavLink onClick={props.onClick} href="#">
              {props.header} <FontAwesomeIcon
                className="sidebar-secondary-arrow"
                icon={faArrowCircleLeft} />
            </NavLink>
          </NavItem>
        </SecondaryBackButton>
        {
          props.items.map((item, indx) => (
            <NavItem key={indx}>
              <NavLink href={item.url}>{item.name}</NavLink>
            </NavItem>
          ))
        }
      </Nav>
      <Nav className="foot">
        {props.user ? signoutLink : loginLink}
      </Nav>
    </div>
  );
}