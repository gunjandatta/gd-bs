
// GdBs: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './gd-bs.core.js';
import {
  Accordion,
  Alert,
  Badge,
  Breadcrumb,
  Button,
  ButtonGroup,
  Card,
  CardGroup,
  Carousel,
  CheckboxGroup,
  Collapse,
  Dropdown,
  Form,
  InputGroup,
  Jumbotron,
  ListGroup,
  Modal,
  Nav,
  Navbar,
  Pagination,
  Panel,
  Popover,
  Progress,
  ProgressGroup,
  Spinner,
  Table,
  Toast,
  Toolbar,
  Tooltip
} from './gd-bs.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    Accordion,
    Alert,
    Badge,
    Breadcrumb,
    Button,
    ButtonGroup,
    Card,
    CardGroup,
    Carousel,
    CheckboxGroup,
    Collapse,
    Dropdown,
    Form,
    InputGroup,
    Jumbotron,
    ListGroup,
    Modal,
    Nav,
    Navbar,
    Pagination,
    Panel,
    Popover,
    Progress,
    ProgressGroup,
    Spinner,
    Table,
    Toast,
    Toolbar,
    Tooltip
  ], opts);
}
