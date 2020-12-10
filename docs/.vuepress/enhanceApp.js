import LayoutGrid from '../../src/components/LayoutGrid';
import LayoutGridInner from '../../src/components/LayoutGridInner';
import LayoutGridCell from '../../src/components/LayoutGridCell';
import AutoComplete from '../../src/components/AutoComplete';
import Button from '../../src/components/Button';
import Card from '../../src/components/Card';
import Checkbox from '../../src/components/Checkbox';
import Chip from '../../src/components/Chip';
import ChipGrid from '../../src/components/ChipGrid';
import DataTable from '../../src/components/DataTable';
import FabButton from '../../src/components/FabButton';
import IconButton from '../../src/components/IconButton';
import ImageList from '../../src/components/ImageList';
import LinearProgress from '../../src/components/LinearProgress';
import List from '../../src/components/List';
import ListItem from '../../src/components/ListItem';
import Menu from '../../src/components/Menu';
import Modal from '../../src/components/Modal';
import RadioButton from '../../src/components/RadioButton';
import Select from '../../src/components/Select';
import Snackbar from '../../src/components/Snackbar';
import Switche from '../../src/components/Switche';
import TextArea from '../../src/components/TextArea';
import TextField from '../../src/components/TextField';
import TextFieldMask from '../../src/components/TextFieldMask';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component(LayoutGrid.name, LayoutGrid),
  Vue.component(LayoutGridInner.name, LayoutGridInner),
  Vue.component(LayoutGridCell.name, LayoutGridCell),
  Vue.component(AutoComplete.name, AutoComplete)
  Vue.component(Button.name, Button),
  Vue.component(Card.name, Card),
  Vue.component(Checkbox.name, Checkbox),
  Vue.component(Chip.name, Chip),
  Vue.component(ChipGrid.name, ChipGrid),
  Vue.component(DataTable.name, DataTable),
  Vue.component(FabButton.name, FabButton),
  Vue.component(IconButton.name, IconButton),
  Vue.component(ImageList.name, ImageList),
  Vue.component(LinearProgress.name, LinearProgress),
  Vue.component(List.name, List) 
  Vue.component(ListItem.name, ListItem),
  Vue.component(Menu.name, Menu),
  Vue.component(Modal.name, Modal),
  Vue.component(RadioButton.name, RadioButton),
  Vue.component(Select.name, Select),
  Vue.component(Snackbar.name, Snackbar),
  Vue.component(Switche.name, Switche),
  Vue.component(TextArea.name, TextArea),
  Vue.component(TextField.name, TextField),
  Vue.component(TextFieldMask.name, TextFieldMask)
}