IMAGE_NAME = "bento/ubuntu-20.04"
N = 2

Vagrant.configure("2") do |config|
  config.vm.provider "virtualbox" do |v|
    v.memory = 2048
    v.cpus = 4
  end

  # VIDEO SERVICE MACHINES
  # Video Service Cluster Master
  config.vm.define "video-service-master" do |master|
    master.vm.box = IMAGE_NAME
    master.vm.network "private_network", ip: "192.168.10.10"
    master.vm.network "forwarded_port", guest: 8080, host:3000
    master.vm.hostname = "video-service-master"
    master.vm.provision "shell", path: "video-service-slice/kubernetes-setup/setup-docker.sh"
    master.vm.provision "ansible" do |ansible|
      ansible.playbook = "video-service-slice/kubernetes-setup/master-playbook.yml"
      ansible.extra_vars = {
        node_ip: "192.168.10.10",
      }
    end
  end

  # Video Service Worker 1
  config.vm.define "video-service-node-1" do |node|
    node.vm.box = IMAGE_NAME
    node.vm.network "private_network", ip: "192.168.10.20"
    node.vm.hostname = "video-service-node-1"
    node.vm.provision "shell", path: "video-service-slice/kubernetes-setup/setup-docker.sh"
    node.vm.provision "ansible" do |ansible|
      ansible.playbook = "video-service-slice/kubernetes-setup/node-playbook.yml"
      ansible.extra_vars = {
        node_ip: "192.168.10.20",
      }
    end
  end

  # Video Service Worker 2
  config.vm.define "video-service-node-2" do |node|
    node.vm.box = IMAGE_NAME
    node.vm.network "private_network", ip: "192.168.10.30"
    node.vm.hostname = "video-service-node-2"
    node.vm.provision "shell", path: "video-service-slice/kubernetes-setup/setup-docker.sh"
    node.vm.provision "ansible" do |ansible|
      ansible.playbook = "video-service-slice/kubernetes-setup/node-playbook.yml"
      ansible.extra_vars = {
        node_ip: "192.168.10.30",
      }
    end
  end

  # DATABASE SERVICE MACHINES
  # Database Service Cluster Master
  config.vm.define "database-service-master" do |master|
    master.vm.box = IMAGE_NAME
    master.vm.network "private_network", ip: "192.168.20.10"
    master.vm.network "forwarded_port", guest: 8080, host:4000
    master.vm.hostname = "database-service-master"
    master.vm.provision "shell", path: "database-service-slice/kubernetes-setup/setup-docker.sh"
    master.vm.provision "ansible" do |ansible|
      ansible.playbook = "database-service-slice/kubernetes-setup/master-playbook.yml"
      ansible.extra_vars = {
        node_ip: "192.168.20.10",
      }
    end
  end

  # Database Service Worker 1
  config.vm.define "database-service-node-1" do |node|
    node.vm.box = IMAGE_NAME
    node.vm.network "private_network", ip: "192.168.20.20"
    node.vm.hostname = "database-service-node-1"
    node.vm.provision "shell", path: "database-service-slice/kubernetes-setup/setup-docker.sh"
    node.vm.provision "ansible" do |ansible|
      ansible.playbook = "database-service-slice/kubernetes-setup/node-playbook.yml"
      ansible.extra_vars = {
        node_ip: "192.168.20.20",
      }
    end
  end

  # Database Service Worker 2
  config.vm.define "database-service-node-2" do |node|
    node.vm.box = IMAGE_NAME
    node.vm.network "private_network", ip: "192.168.20.30"
    node.vm.hostname = "database-service-node-2"
    node.vm.provision "shell", path: "database-service-slice/kubernetes-setup/setup-docker.sh"
    node.vm.provision "ansible" do |ansible|
      ansible.playbook = "database-service-slice/kubernetes-setup/node-playbook.yml"
      ansible.extra_vars = {
        node_ip: "192.168.20.30",
      }
    end
  end

end