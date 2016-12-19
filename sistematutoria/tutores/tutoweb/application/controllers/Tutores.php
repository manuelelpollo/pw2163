<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Tutores extends CI_Controller {

	function __construct(){
		parent::__construct();
		$this->load->helper('url');
		$this->load->model('tutores_model');
	}
	
	
	function index()
	{	
		
	}

	function get(){
		$this->output->set_header('Content-Type: application/json; charset=utf-8');

		$res = $this->tutores_model->getTutores();

		echo json_encode($res);
	}

	function getA(){
		$this->output->set_header('Content-Type: application/json; charset=utf-8');

		$res = $this->tutores_model->getAlumnos();

		echo json_encode($res);
	}

	function getFinal(){
		$this->output->set_header('Content-Type: application/json; charset=utf-8');

		$res = $this->tutores_model->getFinal();

		echo json_encode($res);
	}


	function add(){
		$this->output->set_header('Content-Type: application/json; charset=utf-8');
		
		$tuto = $this->input->post("idtuto");
		$alu = $this->input->post("idalum");

		$data = array(
		   'alu_id' => $alu ,
		   'tuto_id' => $tuto 
		);

		$res = $this->tutores_model->addTutoria($data);
		
		echo json_encode($res);

	}	

	
}
