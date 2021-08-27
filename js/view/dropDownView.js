
const stateItemAccessor = (d) => d.state;
const valueAccessor = (d) => d.value;

export default class DropDownView {
    constructor(container, model) {
        this.container = document.getElementById(container);
        this.model = model;

    }

    render() {
        const accessor = this.model.getModeAccessor();
        const menuInfo = this.model.getMenu("views")
            .map((i, n) => {
                const slct = stateItemAccessor(i);
                return `<li data-value="${valueAccessor(i)}" class ="viewListItem cursor-pointer transition duration-500 ease-in-out text-base text-right mt-3 flex flex-row items-center justify-end  text-gray-700">
                                ${accessor(i)}  
                            <div class="box transition duration-500 ease-in-out rounded-md  ${slct == 0 ? "border-transparent" : "border-2 border-gray-700"} ${slct == 1 ? "bg-gray-700" : "bg-transparent"} ml-2 mr-2" ><div/>
                        </li>`
            })
            .join(" ")


        const content = `
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="relative inline-block text-left">
          <div>
            <button id="dropDownBtn" type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
              Views
              <!-- Heroicon name: solid/chevron-down -->
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        
          
          <div id="dropDownContent" class="origin-top-right absolute right-0 mt-2 w-32  pb-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <ul id = "viewListMenu" class="viewsList">
                ${menuInfo}
            </ul>
          </div>
        </div>
       `;
        this.container.innerHTML = content;
        this.setIdentifications();
    }

    setIdentifications() {

        this.content = document.getElementById('dropDownContent')
        this.dropBtn = document.getElementById('dropDownBtn')
        this.items = document.querySelectorAll(".viewListItem");
    }


}

