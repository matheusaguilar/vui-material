<template>
  <div id="app" class="mdc-theme--background">
    <!--Button-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">Buttons</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">raised</div>
          <Button variant="raised" @click="logEvent" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">unelevated</div>
          <Button variant="unelevated" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">outlined</div>
          <Button variant="outlined" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">text</div>
          <Button variant="dense" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">raised leftIcon</div>
          <Button variant="raised" leftIcon="favorite" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">outlined rightIcon</div>
          <Button variant="outlined" rightIcon="favorite" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">raised disabled</div>
          <Button variant="raised" disabled="true" />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--FabButton-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">Fab Button</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">standard leftIcon</div>
          <FabButton leftIcon="favorite" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">standard leftIcon mini</div>
          <FabButton leftIcon="favorite" mini="true" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">extended text leftIcon</div>
          <FabButton variant="extended" text="Text" leftIcon="favorite" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">extended text rightIcon</div>
          <FabButton variant="extended" text="Text" rightIcon="favorite" />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--IconButton-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">Icon Button</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">icon iconOn</div>
          <IconButton icon="favorite_outlined" iconOn="favorite" />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--TextFields-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">TextFields</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">filled</div>
          <TextField />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">outlined</div>
          <TextField variant="outlined" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">full-width</div>
          <TextField variant="full-width" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">filled helperText maxlength</div>
          <TextField helperText="Helper text." :maxlength="20" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">filled leftIcon</div>
          <TextField leftIcon="favorite" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">filled rightIcon</div>
          <TextField rightIcon="favorite" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">outlined leftIcon</div>
          <TextField variant="outlined" leftIcon="favorite" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">outlined rightIcon</div>
          <TextField variant="outlined" rightIcon="favorite" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">filled shaped</div>
          <TextField shaped="true" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">outlined shaped</div>
          <TextField variant="outlined" shaped="true" />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--TextArea-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">Textarea</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="4" tablet="4" phone="4">
          <div class="component-info">textarea maxlength</div>
          <TextArea :maxlength="255" />
        </LayoutGridCell>

        <LayoutGridCell desktop="4" tablet="4" phone="4">
          <div class="component-info">textarea outlined maxlength</div>
          <TextArea variant="outlined" :maxlength="255" />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--Selection-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">Selection</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">select</div>
          <Select :items="['one', 'two']" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">select outlined</div>
          <Select variant="outlined" :items="itemsSelect" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">AutoComplete</div>
          <AutoComplete :search="() => autocompletItems" :start="1" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">checkbox</div>
          <Checkbox />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">radio button</div>
          <RadioButton />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">switch</div>
          <Switche />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--Chips-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">Selection</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="12" tablet="8" phone="4">
          <div class="component-info">ChipGrid with Chip</div>
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
          <div class="component-info">Card</div>
          <Card :img="`${publicPath}assets/porto-seguro-brazil.jpg`" />
        </LayoutGridCell>

        <LayoutGridCell desktop="4" tablet="4" phone="4">
          <div class="component-info">Card basic-overmidia</div>
          <Card
            :img="`${publicPath}assets/porto-seguro-brazil.jpg`"
            variant="basic-overmedia"
          />
        </LayoutGridCell>

        <LayoutGridCell desktop="4" tablet="4" phone="4">
          <div class="component-info">Card basic-header</div>
          <Card
            :img="`${publicPath}assets/porto-seguro-brazil.jpg`"
            variant="basic-header"
          />
        </LayoutGridCell>

        <LayoutGridCell desktop="4" tablet="4" phone="4">
          <div class="component-info">Card action</div>
          <Card
            :img="`${publicPath}assets/porto-seguro-brazil.jpg`"
            action="true"
          >
            <Button />
          </Card>
        </LayoutGridCell>

        <LayoutGridCell desktop="4" tablet="4" phone="4">
          <div class="component-info">Card image-text</div>
          <Card
            :img="`${publicPath}assets/porto-seguro-brazil.jpg`"
            variant="image-text"
          />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--List-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">List</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="12" tablet="8" phone="4">
          <div class="component-info">List with ListItens</div>
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
          <div class="component-info">Modal</div>
          <Button text="Click to open modal 1" @click.native="openModal1" />
        </LayoutGridCell>

        <LayoutGridCell desktop="3" tablet="4" phone="4">
          <div class="component-info">Modal</div>
          <Button text="Click to open modal 2" @click.native="openModal2" />
        </LayoutGridCell>
      </LayoutGridInner>
    </LayoutGrid>

    <!--DataTable-->
    <LayoutGrid class="layout-grid">
      <h3 class="layout-grid-title">DataTable</h3>

      <LayoutGridInner>
        <LayoutGridCell desktop="12" tablet="8" phone="4">
          <div class="component-info">DataTable</div>
          <div style="margin: 8px 0px 8px 0px">
            <Button text="Add Item" @click.native="addItemTable" />
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
          <div class="component-info">Menu</div>
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
          <div class="component-info">Snackbar</div>
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
          <div class="component-info">Linear Progress</div>
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
import TextArea from "./components/TextArea.vue";
import Select from "./components/Select.vue";
import AutoComplete from "./components/AutoComplete.vue";
import Checkbox from "./components/Checkbox.vue";
import Switche from "./components/Switche.vue";
import RadioButton from "./components/RadioButton.vue";
import ChipGrid from "./components/ChipGrid.vue";
import Chip from "./components/Chip.vue";
import Card from "./components/Card.vue";
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
    TextArea,
    Select,
    AutoComplete,
    Checkbox,
    Switche,
    RadioButton,
    ChipGrid,
    Chip,
    Card,
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
  @Ref("dataTable") readonly dataTable!: any;
  @Ref("menu") readonly menu!: any;
  @Ref("snackbar") readonly snackbar!: any;

  private tableData = [
    ["Blue Ice", 24, 5.0, "Super tasty"],
    ["Frozen yogurt", 24, 3.2, "Super tasty"],
    ["Ice cream sandwich", 37, 4.3, "I like ice cream more"],
    ["Amber", 37, 1.3, "I like ice cream more"]
  ];

  private itemsSelect: any[] = ["one", "two"];

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

  publicPath = process.env.BASE_URL;

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
      width: 100%;
      font-size: 14px;
      margin-bottom: 6px;
      color: rgba(0, 0, 0, 0.54);
    }
  }
}
</style>
