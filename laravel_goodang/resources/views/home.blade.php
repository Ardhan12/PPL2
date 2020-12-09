@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-4">
         <div class="col-ml-6 col-ml-offset-6">
                <div class="card card-standard">
                    <div class="card-body">
                        <a class="" href="{{ url('/home') }}"> Dashboard </a>
                        <br>
                        <a class=" " href="{{ url('/home') }}"> Manage Products </a>
                        <br>
                        <a class=" " href="{{ url('/home') }}"> Stocks </a>
                        <br>
                        <a class=" " href="{{ url('/home') }}"> Customer </a>
                    </div>
                </div>
            </div>
            {{-- <div class="col-ml-6 col-ml-offset-6">
                <img src="{{url('img/Logo.png')}}" style="margin-left:50px" width ="500" alt="">
            </div> --}}
        </div>
        <div class="col-md-8">
            <div class="col-ml-6 col-ml-offset-6">
                <div class="card">
                    <div class="col-md-6">Dashboard</div>
                        <div class="card-body">
                        <div class="card">
                            <div class="card-header">Product Details</div>
                                <div class="card-body">
                                </div>
                            </div>
                        <br>
                        <div class="card">
                            <div class="card-header">Inventory Details</div>
                                <div class="card-body">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </div>
</div>
@endsection
