export const SideBar= {
    
    render(){
        return `
        <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    
        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div class="sidebar-brand-icon ">
            <img width=20 class="ml-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/647px-Apple_logo_black.svg.png">
            </div>
            <div class="sidebar-brand-text mx-3 mt-2">APPLE </div>
        </a>
    
        <!-- Divider -->
        <hr class="sidebar-divider my-0">
    
        
    
        <!-- Divider -->
        <hr class="sidebar-divider">
    
        <!-- Heading -->
        <div class="sidebar-heading">
            Interface
        </div>
    
        <!-- Nav Item - Pages Collapse Menu -->
        <div class="nav-item">
            <div class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-cog"></i>
                <span>Components</span>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">User</h6>
                    <a class="collapse-item" data-navigo href="#/users/index">List data</a>
                    <a class="collapse-item" data-navigo href="#/users/creat">Creat</a>

                </div>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Category</h6>
                    <a class="collapse-item" data-navigo href="#/category/index">List data</a>
                    <a class="collapse-item" data-navigo href="#/category/creat">Creat</a>
                </div>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Product</h6>
                    <a class="collapse-item" data-navigo href="#/product/index">List data</a>
                    <a class="collapse-item" data-navigo href="#/product/creat">Creat</a>
                </div>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Order</h6>
                <a class="collapse-item" data-navigo href="#/order/index">List data</a>
                <a class="collapse-item" data-navigo href="#/order/creat">Creat</a>
            </div>
        </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">contact</h6>
                    <a class="collapse-item" data-navigo href="#/contact/index">List data</a>
                </div>
            </div>
        </div>
    
        
    
        <!-- Divider -->
        <hr class="sidebar-divider">
    
       
    
        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
    
    </ul>
    <!-- End of Sidebar -->
    `;
    }
   
   
   
    
}