<template>
	<b-row class="d-flex align-items-center p-4">
		<b-col>
			<vue-good-table
				:columns="columns"
				:rows="rows"
				:sort-options="{
				enabled: true,
				initialSortBy: {field: 'name', type: 'asc'}}">

				<template slot="table-row" slot-scope="props">
<!--				<span v-if="props.column.field === 'name'">-->

<!--				</span>-->
				</template>
			</vue-good-table>
		</b-col>

	</b-row>
</template>

<script>
  export default {
    name: "Inbox",
    data() {
      return {
        columns: [
          {
            label: 'Name',
            field: 'name',
          },
          {
            label: 'Message Title',
            field: 'age',
            type: 'number',
          },
          // {
          //   label: 'Created On',
          //   field: 'createdAt',
          //   type: 'date',
          //   dateInputFormat: 'yyyy-MM-dd',
          //   dateOutputFormat: 'MMM do yy',
          // },
          {
            label: 'Actions',
            field: 'score',
            type: 'percentage',
          },
        ],
        rows: [
          {id: 1, name: "John", age: 20, createdAt: '', score: 0.03343},
          {id: 2, name: "Jane", age: 24, createdAt: '2011-10-31', score: 0.03343},
          {id: 3, name: "Susan", age: 16, createdAt: '2011-10-30', score: 0.03343},
          {id: 4, name: "Chris", age: 55, createdAt: '2011-10-11', score: 0.03343},
          {id: 5, name: "Dan", age: 40, createdAt: '2011-10-21', score: 0.03343},
          {id: 6, name: "John", age: 20, createdAt: '2011-10-31', score: 0.03343},
        ],
      }
    }
  }
</script>

<style scoped>

</style>