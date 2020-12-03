<template>
  <div id="app" class="mdc-theme--background">
    <!--Button-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">Buttons</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">raised</div>
            <i class="material-icons" @click="openModalCode(0)">code</i>
          </div>
          <Button variant="raised" @click="logEvent" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">unelevated</div>
            <i class="material-icons" @click="openModalCode(1)">code</i>
          </div>
          <Button variant="unelevated" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">outlined</div>
            <i class="material-icons" @click="openModalCode(2)">code</i>
          </div>
          <Button variant="outlined" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">dense</div>
            <i class="material-icons" @click="openModalCode(3)">code</i>
          </div>
          <Button variant="dense" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">raised leftIcon</div>
            <i class="material-icons" @click="openModalCode(4)">code</i>
          </div>
          <Button variant="raised" leftIcon="favorite" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">outlined rightIcon</div>
            <i class="material-icons" @click="openModalCode(5)">code</i>
          </div>
          <Button variant="outlined" rightIcon="favorite" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">raised disabled</div>
            <i class="material-icons" @click="openModalCode(6)">code</i>
          </div>
          <Button variant="raised" disabled="true" />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--FabButton-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">Fab Button</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">standard leftIcon</div>
            <i class="material-icons" @click="openModalCode(7)">code</i>
          </div>
          <FabButton leftIcon="favorite" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">standard leftIcon mini</div>
            <i class="material-icons" @click="openModalCode(8)">code</i>
          </div>
          <FabButton leftIcon="favorite" mini="true" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">extended text leftIcon</div>
            <i class="material-icons" @click="openModalCode(9)">code</i>
          </div>
          <FabButton variant="extended" text="Text" leftIcon="favorite" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">extended text rightIcon</div>
            <i class="material-icons" @click="openModalCode(10)">code</i>
          </div>
          <FabButton variant="extended" text="Text" rightIcon="favorite" />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--IconButton-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">Icon Button</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">icon iconOn</div>
            <i class="material-icons" @click="openModalCode(11)">code</i>
          </div>
          <IconButton icon="favorite_outlined" iconOn="favorite" />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--TextFields-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">TextFields</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">filled</div>
            <i class="material-icons" @click="openModalCode(12)">code</i>
          </div>
          <TextField variant="filled" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">outlined</div>
            <i class="material-icons" @click="openModalCode(13)">code</i>
          </div>
          <TextField variant="outlined" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">full-width</div>
            <i class="material-icons" @click="openModalCode(14)">code</i>
          </div>
          <TextField variant="full-width" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">filled helperText maxlength</div>
            <i class="material-icons" @click="openModalCode(15)">code</i>
          </div>
          <TextField helperText="Helper text." :maxlength="20" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">filled leftIcon</div>
            <i class="material-icons" @click="openModalCode(16)">code</i>
          </div>
          <TextField leftIcon="favorite" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">filled rightIcon</div>
            <i class="material-icons" @click="openModalCode(17)">code</i>
          </div>
          <TextField rightIcon="favorite" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">outlined leftIcon</div>
            <i class="material-icons" @click="openModalCode(18)">code</i>
          </div>
          <TextField variant="outlined" leftIcon="favorite" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">outlined rightIcon</div>
            <i class="material-icons" @click="openModalCode(19)">code</i>
          </div>
          <TextField variant="outlined" rightIcon="favorite" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">filled shaped</div>
            <i class="material-icons" @click="openModalCode(20)">code</i>
          </div>
          <TextField shaped="true" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">outlined shaped</div>
            <i class="material-icons" @click="openModalCode(21)">code</i>
          </div>
          <TextField variant="outlined" shaped="true" />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--TextFieldMask-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">TextFieldMask</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="4" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">textfieldmask filled</div>
            <i class="material-icons" @click="openModalCode(22)">code</i>
          </div>
          <TextFieldMask mask="99/99/9999" type="tel" :required="true" />
        </LayoutGridCell>

        <LayoutGridCell desktop="4" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">textfieldmask outlined</div>
            <i class="material-icons" @click="openModalCode(23)">code</i>
          </div>
          <TextFieldMask
            variant="outlined"
            :mask="['999.999.999-99', '999.999.999/9999']"
            type="tel"
            :required="true"
          />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--TextArea-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">Textarea</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="4" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">textarea maxlength</div>
            <i class="material-icons" @click="openModalCode(24)">code</i>
          </div>
          <TextArea :maxlength="255" />
        </LayoutGridCell>

        <LayoutGridCell desktop="4" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">textarea outlined maxlength</div>
            <i class="material-icons" @click="openModalCode(25)">code</i>
          </div>
          <TextArea variant="outlined" :maxlength="255" />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--Selection-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">Selection</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">select</div>
            <i class="material-icons" @click="openModalCode(26)">code</i>
          </div>
          <Select :items="['one', 'two']" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">select outlined</div>
            <i class="material-icons" @click="openModalCode(27)">code</i>
          </div>
          <Select variant="outlined" :items="itemsSelect" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">auto complete</div>
            <i class="material-icons" @click="openModalCode(28)">code</i>
          </div>
          <AutoComplete :search="() => autocompletItems" :start="1" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">checkbox</div>
            <i class="material-icons" @click="openModalCode(29)">code</i>
          </div>
          <Checkbox />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">radio button</div>
            <i class="material-icons" @click="openModalCode(30)">code</i>
          </div>
          <RadioButton />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">switch</div>
            <i class="material-icons" @click="openModalCode(31)">code</i>
          </div>
          <Switche />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--Chips-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">Selection</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="12" tablet="8" phone="4">
          <div class="component-info">
            <div class="component-info-title">chipgrid with chips</div>
            <i class="material-icons" @click="openModalCode(32)">code</i>
          </div>
          <ChipGrid>
            <Chip leftIcon="favorite" />
            <Chip leftIcon="favorite_outlined" />
            <Chip leftIcon="person" />
            <Chip leftIcon="alarm" />
          </ChipGrid>
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--Card-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">Card</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="4" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">card</div>
            <i class="material-icons" @click="openModalCode(33)">code</i>
          </div>
          <Card
            :img="`${publicPath}assets/porto-seguro-brazil.jpg`"
            :lazy="true"
          />
        </LayoutGridCell>

        <LayoutGridCell desktop="4" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">basic-overmidia</div>
            <i class="material-icons" @click="openModalCode(34)">code</i>
          </div>
          <Card
            variant="basic-overmedia"
            :img="`${publicPath}assets/porto-seguro-brazil.jpg`"
            :lazy="true"
          />
        </LayoutGridCell>

        <LayoutGridCell desktop="4" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">basic-header</div>
            <i class="material-icons" @click="openModalCode(35)">code</i>
          </div>
          <Card
            variant="basic-header"
            :img="`${publicPath}assets/porto-seguro-brazil.jpg`"
            :lazy="true"
          />
        </LayoutGridCell>

        <LayoutGridCell desktop="4" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">action</div>
            <i class="material-icons" @click="openModalCode(36)">code</i>
          </div>
          <Card
            :img="`${publicPath}assets/porto-seguro-brazil.jpg`"
            action="true"
            :lazy="true"
          >
            <Button />
          </Card>
        </LayoutGridCell>

        <LayoutGridCell desktop="4" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">image-text</div>
            <i class="material-icons" @click="openModalCode(37)">code</i>
          </div>
          <Card
            :img="`${publicPath}assets/porto-seguro-brazil.jpg`"
            variant="image-text"
            :lazy="true"
          />
        </LayoutGridCell>

        <LayoutGridCell desktop="4" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">clean</div>
            <i class="material-icons" @click="openModalCode(38)">code</i>
          </div>
          <Card
            :img="`${publicPath}assets/porto-seguro-brazil.jpg`"
            variant="clean"
            :lazy="true"
          />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--ImageList-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">Image List</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="12" tablet="8" phone="4">
          <div class="component-info">
            <div class="component-info-title">image list</div>
            <i class="material-icons" @click="openModalCode(39)">code</i>
          </div>
          <ImageList
            :imgs="imageListItems"
            variant="standard"
            :lazy="true"
            :labelOverflow="true"
            :column="4"
            @click="logEvent"
          />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--List-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">List</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="12" tablet="8" phone="4">
          <div class="component-info">
            <div class="component-info-title">list with listItens</div>
            <i class="material-icons" @click="openModalCode(40)">code</i>
          </div>
          <List>
            <ListItem text="List Item without divider" leftIcon="alarm" />
            <ListItem
              text="List Item with divider"
              leftIcon="star"
              divider="true"
            />
            <ListItem
              text="List Item with Description"
              description="Description..."
              @click="logEvent"
            />
            <ListItem
              text="List Item with Description and leftIcon"
              description="Description..."
              leftIcon="favorite"
            />
          </List>
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--Modal-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">Modal</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">modal</div>
            <i class="material-icons" @click="openModalCode(41)">code</i>
          </div>
          <Button text="Click to open modal 1" @click="openModal1" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">
            <div class="component-info-title">modal with slot</div>
            <i class="material-icons" @click="openModalCode(42)">code</i>
          </div>
          <Button text="Click to open modal 2" @click="openModal2" />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--DataTable-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">DataTable</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="12" tablet="8" phone="4">
          <div class="component-info">
            <div class="component-info-title">dataTable</div>
            <i class="material-icons" @click="openModalCode(43)">code</i>
          </div>
          <div style="margin: 8px 0px 8px 0px">
            <Button text="Add Item" @click="addItemTable" />
          </div>
          <DataTable
            ref="dataTable"
            :head="[
              { name: 'Dessert', sort: true },
              { name: 'Carbs (g)', number: true },
              { name: 'Protein (g)', number: true, sort: true },
              'Comments'
            ]"
            :data="tableData"
            @sort="sortTable"
          />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--Menu-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">Menu</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="12" tablet="8" phone="4">
          <div class="component-info">
            <div class="component-info-title">menu</div>
            <i class="material-icons" @click="openModalCode(44)">code</i>
          </div>
          <div style="margin: 8px 0px 8px 0px">
            <Button text="Open menu" @click.native="openMenu" />
          </div>
          <Menu
            ref="menu"
            @click="logEvent"
            :items="['item 1', 'item 2', 'item 3']"
          />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--Snackbar-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">Snackbar</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="12" tablet="8" phone="4">
          <div class="component-info">
            <div class="component-info-title">snackbar</div>
            <i class="material-icons" @click="openModalCode(45)">code</i>
          </div>
          <div style="margin: 8px 0px 8px 0px">
            <Button text="Open Snackbar" @click.native="openSnackbar" />
          </div>
          <Snackbar ref="snackbar" @click="logEvent" />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--Linear Progress-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">Linear Progress</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="12" tablet="8" phone="4">
          <div class="component-info">
            <div class="component-info-title">linear progress</div>
            <i class="material-icons" @click="openModalCode(46)">code</i>
          </div>
          <LinearProgress />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--Modals-->
    <Modal ref="modal1" text="Text" />
    <Modal ref="modal2" :simple="false">
      <List>
        <ListItem text="Item 1" leftIcon="alarm" />
        <ListItem text="Item 2" leftIcon="star" />
      </List>
    </Modal>
    <Modal ref="modalCode" id="modalCode" title="Code" :simple="false">
      <div class="code-container">
        <pre>
          <code class="language-markup" id="code">
          </code>
        </pre>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from "vue-property-decorator";
import LayoutGrid from "./components/LayoutGrid.vue";
import LayoutGridCell from "./components/LayoutGridCell.vue";
import LayoutGridInner from "./components/LayoutGridInner.vue";
import Button from "./components/Button.vue";
import FabButton from "./components/FabButton.vue";
import IconButton from "./components/IconButton.vue";
import TextField from "./components/TextField.vue";
import TextFieldMask from "./components/TextFieldMask.vue";
import TextArea from "./components/TextArea.vue";
import Select from "./components/Select.vue";
import AutoComplete from "./components/AutoComplete.vue";
import Checkbox from "./components/Checkbox.vue";
import Switche from "./components/Switche.vue";
import RadioButton from "./components/RadioButton.vue";
import ChipGrid from "./components/ChipGrid.vue";
import Chip from "./components/Chip.vue";
import Card from "./components/Card.vue";
import ImageList from "./components/ImageList.vue";
import List from "./components/List.vue";
import ListItem from "./components/ListItem.vue";
import Modal from "./components/Modal.vue";
import DataTable from "./components/DataTable.vue";
import Menu from "./components/Menu.vue";
import Snackbar from "./components/Snackbar.vue";
import LinearProgress from "./components/LinearProgress.vue";

@Component({
  components: {
    LayoutGrid,
    LayoutGridCell,
    LayoutGridInner,
    Button,
    FabButton,
    IconButton,
    TextField,
    TextFieldMask,
    TextArea,
    Select,
    AutoComplete,
    Checkbox,
    Switche,
    RadioButton,
    ChipGrid,
    Chip,
    Card,
    ImageList,
    List,
    ListItem,
    Modal,
    DataTable,
    Menu,
    Snackbar,
    LinearProgress
  }
})
export default class App extends Vue {
  @Ref("modal1") readonly modal1!: any;
  @Ref("modal2") readonly modal2!: any;
  @Ref("modalCode") readonly modalCode!: any;
  @Ref("dataTable") readonly dataTable!: any;
  @Ref("menu") readonly menu!: any;
  @Ref("snackbar") readonly snackbar!: any;

  private codeText = [
    '<Button variant="raised"/>',
    '<Button variant="unelevated"/>',
    '<Button variant="outlined"/>',
    '<Button variant="dense"/>',
    '<Button variant="raised" leftIcon="favorite"/>',
    '<Button variant="outlined" rightIcon="favorite" />',
    '<Button variant="raised" disabled="true" />',
    '<FabButton leftIcon="favorite" />',
    '<FabButton leftIcon="favorite" mini="true" />',
    '<FabButton variant="extended" text="Text" leftIcon="favorite" />',
    '<FabButton variant="extended" text="Text" rightIcon="favorite" />',
    '<IconButton icon="favorite_outlined" iconOn="favorite" />',
    '<TextField variant="filled"/>',
    '<TextField variant="outlined" />',
    '<TextField variant="full-width" />',
    '<TextField helperText="Helper text." :maxlength="20" />',
    '<TextField leftIcon="favorite" />',
    '<TextField rightIcon="favorite" />',
    '<TextField variant="outlined" leftIcon="favorite" />',
    '<TextField variant="outlined" rightIcon="favorite" />',
    '<TextField shaped="true" />',
    '<TextField variant="outlined" shaped="true" />',
    '<TextFieldMask mask="99/99/9999" type="tel" :required="true" />',
    '<TextFieldMask variant="outlined" :mask="[\'999.999.999-99\', \'999.999.999/9999\']" type="tel" :required="true"/>',
    '<TextArea :maxlength="255" />',
    '<TextArea variant="outlined" :maxlength="255" />',
    "<Select :items=\"['one', 'two']\" />",
    "<Select variant=\"outlined\" :items=\"['one', 'two']\" />",
    `<AutoComplete :search="() => ["one", "two", "three"]" :start="1" />`,
    "<Checkbox />",
    "<RadioButton />",
    "<Switche />",
    `<ChipGrid>
          <Chip leftIcon="favorite" />
          <Chip leftIcon="favorite_outlined" />
          <Chip leftIcon="person" />
          <Chip leftIcon="alarm" />
        </ChipGrid>`,
    `<Card :img="/assets/porto-seguro-brazil.jpg" :lazy="true" />`,
    `<Card variant="basic-overmedia" :img="/assets/porto-seguro-brazil.jpg" :lazy="true" />`,
    `<Card variant="basic-header" :img="/assets/porto-seguro-brazil.jpg" :lazy="true" />`,
    `<Card :action="true" :img="/assets/porto-seguro-brazil.jpg" :lazy="true">
          <Button />
        </Card>`,
    `<Card variant="image-text" :img="/assets/porto-seguro-brazil.jpg" :lazy="true" />`,
    `<Card variant="clean" :img="/assets/porto-seguro-brazil.jpg" :lazy="true" />`,
    `<ImageList 
            variant="standard"
            :imgs="['assets/angra-dos-reis-brazil.jpg', 'assets/angra-dos-reis-brazil.jpg']"
            :lazy="true"
            :labelOverflow="true"
            :column="4"
          />`,
    `<List>
            <ListItem text="List Item without divider" leftIcon="alarm" />
            <ListItem
              text="List Item with divider"
              leftIcon="star"
              divider="true"
            />
            <ListItem
              text="List Item with Description"
              description="Description..."
            />
            <ListItem
              text="List Item with Description and leftIcon"
              description="Description..."
              leftIcon="favorite"
            />
          </List>`,
    `<Button text="Click to open modal 1" @click="openModal1" />
        <Modal ref="modal1" text="Text" />
        openModal1() {
          this.$refs.modal1.open();
        }`,
    `<Button text="Click to open modal 2" @click="openModal2" />
        <Modal ref="modal2" :simple="false">
          <List>
            <ListItem text="Item 1" leftIcon="alarm" />
            <ListItem text="Item 2" leftIcon="star" />
          </List>
        </Modal>
        openModal2() {
          this.$refs.modal2.open();
        }`,
    `<Button text="Add Item" @click="addItemTable" />
          <DataTable
            ref="dataTable"
            :head="[
              { name: 'Dessert', sort: true },
              { name: 'Carbs (g)', number: true },
              { name: 'Protein (g)', number: true, sort: true },
              'Comments'
            ]"
            :data="[
              ["Blue Ice", 24, 5.0, "Super tasty"],
              ["Frozen yogurt", 24, 3.2, "Super tasty"],
              ["Ice cream sandwich", 37, 4.3, "I like ice cream more"],
              ["Amber", 37, 1.3, "I like ice cream more"]
            ]"
            @sort="sortTable"
          />`,
    `<Menu :items="['item 1', 'item 2', 'item 3']" />`,
    `<Snackbar />`,
    `<LinearProgress />`
  ];

  private tableData = [
    ["Blue Ice", 24, 5.0, "Super tasty"],
    ["Frozen yogurt", 24, 3.2, "Super tasty"],
    ["Ice cream sandwich", 37, 4.3, "I like ice cream more"],
    ["Amber", 37, 1.3, "I like ice cream more"]
  ];

  private itemsSelect: any[] = ["one", "two"];

  private testMask = "12345678912";

  private autocompletItems = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "html",
    "css",
    "js"
  ];

  private imageListItems = [
    {
      src: `${process.env.BASE_URL}assets/angra-dos-reis-brazil.jpg`,
      label: "Image with label"
    },
    `${process.env.BASE_URL}assets/angra-dos-reis-brazil.jpg`,
    {
      src: `${process.env.BASE_URL}assets/angra-dos-reis-brazil.jpg`,
      label: "Image with label"
    },
    `${process.env.BASE_URL}assets/angra-dos-reis-brazil.jpg`,
    `${process.env.BASE_URL}assets/angra-dos-reis-brazil.jpg`,
    `${process.env.BASE_URL}assets/angra-dos-reis-brazil.jpg`,
    `${process.env.BASE_URL}assets/angra-dos-reis-brazil.jpg`,
    `${process.env.BASE_URL}assets/angra-dos-reis-brazil.jpg`
  ];

  publicPath = process.env.BASE_URL;

  logVal(val: string) {
    console.log(val);
  }

  logEvent(data: any) {
    console.log(data);
  }

  openSnackbar() {
    this.snackbar.open();
  }

  openMenu() {
    this.menu.open();
  }

  addItemTable() {
    // console.log(this.dataTable.getSelectedRows());
    this.tableData.push([
      "Another Ice cream",
      37,
      4.3,
      "I like ice cream more"
    ]);
  }

  sortTable(data: any) {
    const sortFn = (index: number) => (a: any, b: any) => {
      if (a[index] === b[index]) {
        return 0;
      } else {
        return a[index] < b[index] ? -1 : 1;
      }
    };

    if (data.order === "ascending") {
      this.tableData.sort(sortFn(data.index));
    } else {
      this.tableData.sort(sortFn(data.index)).reverse();
    }
  }

  openModal1() {
    this.modal1.open();
  }

  openModal2() {
    this.modal2.open();
  }

  openModalCode(index: number) {
    const codeElement = document.getElementById("code");
    if (codeElement) {
      codeElement.innerHTML = this.codeText[index].replaceAll("<", "&lt");
      window.setTimeout(() => {
        (window as any).Prism.highlightElement(codeElement);
      });
    }

    this.modalCode.open();
  }
}
</script>

<style lang="scss">
#app {
  margin-top: 60px;
  max-width: 1200px;
  margin: 0 auto;

  .layout-grid {
    &-title {
      margin: 24px 0px 24px 0px;
    }

    .component-info {
      display: flex;
      width: 100%;
      min-height: 36px;

      &-title {
        color: rgba(0, 0, 0, 0.54);
      }

      i {
        color: rgba(0, 0, 0, 0.54);
        border-radius: 5px;
        margin-left: 16px;
        width: 26px;
        height: 26px;
        text-align: center;

        &:hover {
          cursor: pointer;
          color: black;
          background-color: #f1f1f1;
        }
      }
    }
  }
}

#modalCode {
  .mdc-dialog__container {
    display: block;
    width: 1200px;
    margin-top: 25%;

    .mdc-dialog__title {
      color: #a4a4a4;
    }

    .mdc-dialog__surface {
      max-width: 1200px;

      .code-container {
        padding: 8px;

        pre {
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
